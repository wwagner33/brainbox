import conf from "../Configuration"
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

    $('#material-tabs').each(function () {
      let $active, $content, $links = $(this).find('a');
      $active = $($links[0]);
      $active.addClass('active');
      $content = $($active[0].hash);
      $links.not($active).each(function () {
        $(this.hash).hide()
      })

      $(this).on('click', 'a', function (e) {
        $active.removeClass('active')
        $content.hide()

        $active = $(this)
        $content = $(this.hash)

        $active.addClass('active')
        $content.show()

        e.preventDefault()
      })
    })

    // load demo files
    //
    function loadDemos(path) {
      storage.getDemos(path).then((files) => {
        files = files.filter(file => file.name.endsWith(conf.fileSuffix) || file.type === "dir")
        files = files.map(file => {
          return {
            ...file,
            readonly: true,
            folder: path,
            title: file.name.replace(conf.fileSuffix, ""),
            image: conf.backend.demo.image(path + file.name)
          }
        })
        if (path.length !== 0) {
          files.unshift({
            name: storage.dirname(path),
            folder: "", // important. Otherwise Hogan makes a lookup fallback to the root element
            type: "dir",
            dir: true,
            readonly: true,
            title: ".."
          })
        }

        let compiled = Hogan.compile($("#filesTemplate").html())
        let output = compiled.render({folder: path, files: files})
        $("#demoBrainFiles").html($(output))
        $("#demoBrainFiles .list-group-item[data-type='dir']").on("click", (event) => {
          let $el = $(event.currentTarget)
          let name = $el.data("name")
          loadDemos(name)
        })

        $("#demoBrainFiles .list-group-item[data-type='file']").on("click", (event) => {
          let $el = $(event.currentTarget)
          let name = $el.data("name")
          $el.addClass("spinner")
          let file = conf.backend.demo.get(name)
          app.load(file).then(() => {
            $el.removeClass("spinner")
            app.historyDemo(name)
          })
        })
      })
    }
    loadDemos("")

    // load user files
    //
    function loadFiles(path) {
      storage.getFiles(path).then((files) => {
        files = files.filter(file => file.name.endsWith(conf.fileSuffix) || file.type === "dir")
        files = files.map(file => {
          return {
            ...file,
            readonly: false,
            folder: path,
            title: file.name.replace(conf.fileSuffix, ""),
            image: conf.backend.file.image(path + file.name)
          }
        })
        if (path.length !== 0) {
          files.unshift({
            name: storage.dirname(path),
            folder: "", // important. Otherwise Hogan makes a lookup fallback to the root element
            type: "dir",
            dir: true,
            readonly: true,
            title: ".."
          })
        }

        let compiled = Hogan.compile($("#filesTemplate").html())
        let output = compiled.render({folder: path, files: files})
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
          $replaceWith.on("click", (event) => {
            return false
          })

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
            } else {
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
          event.preventDefault()
          event.stopPropagation()
          return false
        })

        $("#userBrainFiles .list-group-item[data-type='dir']").on("click", (event) => {
          let $el = $(event.currentTarget)
          let name = $el.data("name")
          loadFiles(name)
        })

        $("#userBrainFiles .list-group-item[data-type='file']").on("click", (event) => {
          let $el = $(event.currentTarget)
          let parent = $el.closest(".list-group-item")
          let name = parent.data("name")
          parent.addClass("spinner")
          let file = conf.backend.file.get(name)
          app.historyFile(name)
          app.load(file).then(() => {
            parent.removeClass("spinner")
          })
        })
      })
    }

    loadFiles("")

    socket.on("brain:generated", msg => {
      let preview = $("a[data-name='" + msg.filePath + "'] img")
      if (preview.length === 0) {
        this.render()
      } else {
        $("a[data-name='" + msg.filePath + "'] img").attr({src: conf.backend.file.image(msg.filePath) + "&timestamp=" + new Date().getTime()})
      }
    })

  }
}
