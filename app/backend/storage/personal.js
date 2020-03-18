const generic = require("./filesystem")
const update = require("../update")

const {thumbnail} = require("../converter/thumbnail")

// Storage backend for the personal usage
//
module.exports = {

  listFiles: generic.listFiles,
  getJSONFile: generic.getJSONFile,
  getBase64Image: generic.getBase64Image,
  renameFile: generic.renameFile,
  deleteFile: generic.deleteFile,
  writeFile: generic.writeFile,

  writeShape:  function (baseDir, subDir, content, reason, res ){
    const io = require('../comm/websocket').io

    generic.writeShape(baseDir, subDir, content, res, (err)=>{
      // inform the browser that the processing of the
      // code generation is ongoing
      //
      io.sockets.emit("shape:generating", {
        filePath: subDir
      })

      // create the js/png/md async to avoid a blocked UI
      //
      thumbnail(baseDir, subDir)


      io.sockets.emit("shape:generated", {
        filePath: subDir,
        imagePath: subDir.replace(".shape", ".png"),
        jsPath: subDir.replace(".shape", ".js")
      })

      // commit the shape to the connected github backend
      update.commitShape(baseDir+subDir, subDir, reason)
    })
  },

  writeBrain:  function (baseDir, subDir, content, res ) {
    generic.writeBrain(baseDir, subDir, content, res, (err) => {
      io.sockets.emit("brain:generated", {
        filePath: filePath
      })
    })
  }
}

