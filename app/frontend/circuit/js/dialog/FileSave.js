import conf from "../Configuration"

import storage from "../io/BackendStorage"
import writer from '../io/Writer'

export default class FileSave {

  /**
   * @constructor
   *
   */
  constructor() {
  }

  /**
   * @method
   *
   * Open the file picker and load the selected file.<br>
   *
   * @param {Function} successCallback callback method if the user select a file and the content is loaded
   * @param {Function} errorCallback method to call if any error happens
   *
   * @since 4.0.0
   */
  show(canvas, defaultFileName) {
    Mousetrap.pause()
    $("#fileSaveDialog .githubFileName").val(defaultFileName)

    $('#fileSaveDialog').off('shown.bs.modal').on('shown.bs.modal', (event) => {
      $(event.currentTarget).find('input:first').focus()
    })
    $("#fileSaveDialog").modal("show")

    // Button: Commit to GitHub
    //
    $("#fileSaveDialog .okButton").off("click").on("click", () => {
      canvas.setCurrentSelection(null)
      writer.marshal(canvas, json => {
        let name = $("#fileSaveDialog .githubFileName").val()
        // to forbid path in the file names you must uncomment this line
        name = name.replace(conf.fileSuffix, "")
        name = name + conf.fileSuffix
        storage.saveFile(json, name)
          .then(function () {
            Mousetrap.unpause()
            app.fileName = name
            $('#fileSaveDialog').modal('hide')
          })
      })
    })
  }
}
