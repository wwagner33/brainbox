#!/usr/bin/env node

const express = require('express')
const fs = require('fs-extra')
const app = express()
const http = require('http').Server(app)
const path = require('path')

const bodyParser = require('body-parser')

const io = require('./comm/websocket').connect(http, {path: '/socket.io'})
const mqtt = require('./comm/hive-mqtt').connect(io, "freegroup/brainbox")
const raspi = require("./comm/raspi").connect(io)

// Tell the bodyparser middleware to accept more data
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

// application specific configuration settings
//
const arduino = require("./comm/arduino")
const storage = require("./storage/personal.js")
const update = require("./update.js")

const brainboxHomeDir = process.env.HOME + "/.brainbox/"
const shapeAppDir = path.normalize(__dirname + '/../shapes/')
const brainsAppDir = path.normalize(__dirname + '/../brains/')
const brainsHomeDir = brainboxHomeDir + "brains/"


// Ensure that the required storage folder exists
//
if (!fs.existsSync(brainboxHomeDir)) {
  fs.mkdirSync(brainboxHomeDir)
}
if (!fs.existsSync(brainsHomeDir)) {
  fs.mkdirSync(brainsHomeDir)
}


// Determine the IP:PORT to use for the http server
//
const address = require("./network")
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
  app.use(bodyParser.urlencoded({extended: true}));
  app.get('/', (req, res) => res.redirect('/circuit'));

  // =================================================================
  // Handle brain files
  //
  // =================================================================
  app.get('/backend/brain/list',    (req, res) => storage.listFiles(brainsHomeDir,      req.query.path, res))
  app.get('/backend/brain/get',     (req, res) => storage.getJSONFile(brainsHomeDir,    req.query.filePath, res))
  app.get('/backend/brain/image',   (req, res) => storage.getBase64Image(brainsHomeDir, req.query.filePath, res))
  app.post('/backend/brain/delete', (req, res) => storage.deleteFile(brainsHomeDir,     req.body.filePath, res))
  app.post('/backend/brain/rename', (req, res) => storage.renameFile(brainsHomeDir,     req.body.from, req.body.to, res))
  app.post('/backend/brain/save',   (req, res) => storage.writeFile(brainsHomeDir,      req.body.filePath, req.body.content, res))


  // =================================================================
  // Handle EXAMPLE brain files
  //
  // =================================================================
  app.get('/backend/demo/list',  (req, res) => storage.listFiles(brainsAppDir, req.query.path, res))
  app.get('/backend/demo/get',   (req, res) => storage.getJSONFile(brainsAppDir, req.query.filePath, res))
  app.get('/backend/demo/image', (req, res) => storage.getBase64Image(brainsAppDir, req.query.filePath, res))

  // =================================================================
  // Handle update files
  //
  // =================================================================
  app.get('/backend/updates/shapes', (req, res) => update.getLatestShapeRelease(res))
  app.post('/backend/updates/shapes', async (req, res) => update.upgradeTo(shapeAppDir, req.body.url, res))

  // =================================================================
  // Handle shape files
  //
  // =================================================================
  app.get('/backend/shape/list', (req, res) => storage.listFiles(shapeAppDir, req.query.path, res))
  app.get('/backend/shape/get', (req, res) => storage.getJSONFile(shapeAppDir, req.query.filePath, res))
  app.get('/backend/shape/image', (req, res) => storage.getBase64Image(shapeAppDir, req.query.filePath, res))
  app.post('/backend/shape/delete', (req, res) => storage.deleteFile(shapeAppDir, req.body.filePath, res))
  app.post('/backend/shape/rename', (req, res) => storage.renameFile(shapeAppDir, req.body.from, req.body.to, res))
  app.post('/backend/shape/save', (req, res) => storage.writeShape(shapeAppDir, req.body.filePath, req.body.content, req.body.commitMessage, res))

  http.listen(port, function () {
    console.log('+------------------------------------------------------------+');
    console.log('| Welcome to brainbox - the beginning of something awesome   |');
    console.log('|------------------------------------------------------------|');
    console.log('| System is up and running. Copy the URL below and open this |');
    console.log('| in your browser: http://' + address + ':' + port + '/               |');
    console.log('|                  http://localhost:' + port + '/                    |');
    console.log('+------------------------------------------------------------+');
  });
}
