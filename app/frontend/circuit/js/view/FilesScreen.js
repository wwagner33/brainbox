import conf from "../Configuration"
import FileNew from "../dialog/FileNew"
import Hogan from "hogan.js"
import storage from "../io/BackendStorage"

/**
 *
 * The **GraphicalEditor** is responsible for layout and dialog handling.
 *
 * @author Andreas Herz
 */

export default class Files {

  /**
   * @constructor
   *
   * @param {String} canvasId the id of the DOM element to use as paint container
   */
  constructor() {
    this.render()
  }

  render() {
    storage.getFiles("").then((files) => {
      files = files.map(file => {
        return {
          ...file,
          title: file.name.replace(conf.fileSuffix, ""),
          path: conf.backend.file.image()
        }
      })

      let compiled = Hogan.compile($("#filesTemplate").html())
      let output = compiled.render({
        files: files
      })

      $("#userBrainFiles").html($(output))

      $("#userBrainFiles .deleteIcon").on("click", (event) => {
        let $el = $(event.currentTarget)
        let name = $el.data("name")
        storage.deleteFile(name).then(() => {
          let parent = $el.closest(".list-group-item")
          parent.hide('slow', () => parent.remove())
        })
      })

      $("[data-toggle='confirmation']").popConfirm({
        title: "Delete File?",
        content: "",
        placement: "bottom" // (top, right, bottom, left)
      })


      $("#userBrainFiles .list-group-item h4").on("click", (event) => {
        Mousetrap.pause()
        let $el = $(event.currentTarget)
        let name = $el.closest(".list-group-item").data("name")
        let $replaceWith = $('<input type="input" class="filenameInplaceEdit" value="' + name.replace(conf.fileSuffix, "") + '" />')
        $el.hide()
        $el.after($replaceWith)
        $replaceWith.focus()

        let fire = () => {
          Mousetrap.unpause()
          let newName = $replaceWith.val()
          if (newName !== "") {
            // get the value and post them here
            newName = storage.sanitize(newName)
            $.ajax({
                url: conf.backend.file.rename,
                method: "POST",
                xhrFields: {withCredentials: true},
                data: {
                  from: name,
                  to: newName
                }
              }
            ).then(() => {
              $replaceWith.remove()
              $el.html(newName.replace(conf.fileSuffix, ""))
              $el.show()
              $el.parent().parent().find("[data-name='" + name + "']").data("name", newName)
            })
          }
          else {
            // get the value and post them here
            $replaceWith.remove()
            $el.show()
          }
        }
        $replaceWith.blur(fire)
        $replaceWith.keypress((e) => {
          if (e.which === 13) {
            fire()
          }
        })
      })

      $("#userBrainFiles .list-group-item .thumbnail").on("click", (event) => {
        let $el = $(event.currentTarget)
        let parent = $el.closest(".list-group-item")
        let name = parent.data("name")
        parent.addClass("spinner")
        storage.loadFile(name)
          .then((content) => {
            $("#leftTabStrip .editor").click()
            storage.currentFile = name
            app.view.clear()
            new draw2d.io.json.Reader().unmarshal(app.view, content)
            app.view.getCommandStack().markSaveLocation()
            app.view.centerDocument()
            parent.removeClass("spinner")
          })
      })

      $('#material-tabs').each(function() {
        let $active, $content, $links = $(this).find('a');
        $active = $($links[0]);
        $active.addClass('active');
        $content = $($active[0].hash);
        $links.not($active).each(() => {
          $(this.hash).hide()
        })

        $(this).on('click', 'a', function(e) {
          $active.removeClass('active')
          $content.hide()

          $active = $(this)
          $content = $(this.hash)

          $active.addClass('active')
          $content.show()

          e.preventDefault()
        })
      })


      $("#userBrainFiles .thumbAdd").on("click", () => {
        new FileNew().show()
      })

      socket.on("brain:generated", msg => {
        let preview = $("a[data-name='" + msg.filePath + "'] img")
        if (preview.length === 0) {
          this.render()
        }
        else {
          $("a[data-name='" + msg.filePath + "'] img").attr({src: conf.backend.file.image()  + msg.filePath + "&timestamp=" + new Date().getTime()})
        }
      })
    })
  }
}
