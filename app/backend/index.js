#!/usr/bin/env node

const express = require('express')
const fs = require('fs-extra')
const app = express()
const http = require('http').Server(app)
const path = require('path')
const childProcess = require('child_process')
const phantomjs = require('phantomjs-prebuilt')
const bodyParser = require('body-parser')
const axios = require('axios')
const unzip = require('unzip')

const io = require('./src/comm/websocket').connect(http, { path: '/socket.io'})
const mqtt = require('./src/comm/hive-mqtt').connect(io, "freegroup/brainbox")
const raspi = require("./src/comm/raspi").connect(io)

// Tell the bodyparser middleware to accept more data
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

// application specific configuration settings
//
const arduino = require("./src/comm/arduino")
const storage= require("./src/storage.js")
const update= require("./src/update.js")

const brainboxHomeDir = process.env.HOME + "/.brainbox/"
const shapeAppDir = path.normalize(__dirname + '/../shapes/')
const brainsAppDir = path.normalize(__dirname + '/../brains/')
const converterDir = path.normalize(__dirname + '/../converter/')
const brainsHomeDir = brainboxHomeDir + "brains/"


// Ensure that the required storage folder exists
//
if (!fs.existsSync(brainboxHomeDir)) {fs.mkdirSync(brainboxHomeDir)}
if (!fs.existsSync(brainsHomeDir)) {fs.mkdirSync(brainsHomeDir)}


// Determine the IP:PORT to use for the http server
//
const address = require("./src/network")
const port = process.env.BRAINBOX_PORT || 7400


// =======================================================================
// Check how many Arduinos are connected to serial port and
// ask to user which one to use.
//
// =======================================================================
arduino.init(io, runServer);


// =======================================================================
//
// The main HTTP Server and socket.io run loop. Serves the HTML files
// and the socket.io access point to change/read the GPIO pins if the server
// is running on an Raspberry Pi
//
// =======================================================================
function runServer() {
  // provide the  WebApp with this very simple
  // HTTP server. Good enough for an private raspi access
  //
  app.use('/circuit/shapes', express.static(shapeAppDir));
  app.use(express.static(__dirname + '/../frontend'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.get('/', (req, res) => res.redirect('/circuit'));

  // =================================================================
  // Handle brain files
  //
  // =================================================================
  app.get('/backend/brain/list',    (req, res) => storage.listFiles(brainsHomeDir,      req.query.path,     res))
  app.get('/backend/brain/get',     (req, res) => storage.getJSONFile(brainsHomeDir,    req.query.filePath, res))
  app.get('/backend/brain/image',   (req, res) => storage.getBase64Image(brainsHomeDir, req.query.filePath, res))
  app.post('/backend/brain/delete', (req, res) => storage.deleteFile(brainsHomeDir,     req.body.filePath, res))
  app.post('/backend/brain/rename', (req, res) => storage.renameFile(brainsHomeDir,     req.body.from, req.body.to, res))
  app.post('/backend/brain/save',   (req, res) => {
    fs.writeFile(brainsHomeDir + req.body.filePath, req.body.content,  (err) =>{
      res.send('true');
      console.log("brain:generated")
      io.sockets.emit("brain:generated", {
        filePath: req.body.filePath
      })
    })
  })

  // =================================================================
  // Handle EXAMPLE brain files
  //
  // =================================================================
  app.get('/backend/demo/list',  (req, res) => storage.listFiles(brainsAppDir,      req.query.path,     res))
  app.get('/backend/demo/get',   (req, res) => storage.getJSONFile(brainsAppDir,    req.query.filePath, res))
  app.get('/backend/demo/image', (req, res) => storage.getBase64Image(brainsAppDir, req.query.filePath, res))

  // =================================================================
  // Handle update files
  //
  // =================================================================
  app.get('/backend/updates/shapes', (req, res) => update.getLatestShapeRelease(res))
  app.post('/backend/updates/shapes', async (req, res) => {
    const file = 'test.zip'
    const writer = fs.createWriteStream(file)
    const response = await axios({
      url: req.body.url,
      method: 'GET',
      responseType: 'stream'
    })
    response.data.pipe(writer)
    writer.on('finish', () => {
      fs.removeSync(shapeAppDir)
      fs.mkdirSync(shapeAppDir)
      fs.createReadStream(file).pipe(unzip.Extract({ path: shapeAppDir }))
      io.sockets.emit("shape:updated", {})
    })
    writer.on('error', () => {
      console.log("Error during shape file updates")
    })
  })

  // =================================================================
  // Handle shape files
  //
  // =================================================================
  app.get('/backend/shape/list',    (req, res) => storage.listFiles(shapeAppDir,      req.query.path,     res))
  app.get('/backend/shape/get',     (req, res) => storage.getJSONFile(shapeAppDir,    req.query.filePath, res))
  app.get('/backend/shape/image',   (req, res) => storage.getBase64Image(shapeAppDir, req.query.filePath, res))
  app.post('/backend/shape/delete', (req, res) => storage.deleteFile(shapeAppDir,     req.body.filePath, res))
  app.post('/backend/shape/rename', (req, res) => storage.renameFile(shapeAppDir,     req.body.from, req.body.to, res))
  app.post('/backend/shape/save',   (req, res) => {
    let dir = require('path').dirname(shapeAppDir + req.body.filePath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }
    fs.writeFile(shapeAppDir + req.body.filePath, req.body.content,  (err) =>{
      if(err) throw err

      // file is saved...fine
      //
      res.send('true');

      // create the js/png/md async to avoid a blocked UI
      //
      let binPath = phantomjs.path
      let converterPath = path.normalize(__dirname+'/../converter/index.js')
      let shapefilePath = path.normalize(shapeAppDir + req.body.filePath)
      let childArgs = [
        converterPath,
        shapefilePath,
        converterDir,
        shapeAppDir
      ]

      // inform the browser that the processing of the
      // code generation is ongoing
      //
      io.sockets.emit("shape:generating", {
        filePath: req.body.filePath
      });

      childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
        if(err) throw err
        io.sockets.emit("shape:generated", {
          filePath: req.body.filePath,
          imagePath: req.body.filePath.replace(".shape",".png"),
          jsPath: req.body.filePath.replace(".shape",".js")
        });

        // commit the shape to the connected github backend
        update.commitShape(req.body.filePath, shapefilePath, req.body.commitMessage)
      })
    });
  });


  http.listen(port, function () {
    console.log('using phantomJS for server side rendering of shape previews:', phantomjs.path)
    console.log('+------------------------------------------------------------+');
    console.log('| Welcome to brainbox - the begin of something awesome       |');
    console.log('|------------------------------------------------------------|');
    console.log('| System is up and running. Copy the URL below and open this |');
    console.log('| in your browser: http://' + address + ':' + port + '/                |');
    console.log('|                  http://localhost:' + port + '/                    |');
    console.log('+------------------------------------------------------------+');
  });
}
