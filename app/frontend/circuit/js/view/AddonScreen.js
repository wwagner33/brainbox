import update from "../io/UpdateManager"
import Hogan from 'hogan.js'
import conf from "../Configuration";
import storage from "../io/BackendStorage";

class AddonScreen {

  constructor() {
  }

  onShow() {
    update.getUpdates().then( content => {
      let tmpl = Hogan.compile($("#updateTemplate").html());
      if(conf.shapes.version === content.tag_name){
        tmpl = Hogan.compile($("#uptodateTemplate").html());
      }

      let html = tmpl.render({
        current_version: conf.shapes.version,
        update: content
      });

      $("#addon .content").html(html);
      $("#addon .installButton").click(event =>{
        let element = $(event.target)
        element.append("<i class=\"fa fa-spinner fa-spin\"></i>")
        screen.onSelect(element.data("url"))
      })
    })
  }

  onSelect(url) {
    return $.ajax({
        url: conf.updates.shapes,
        method: "POST",
        xhrFields: {
          withCredentials: true
        },
        data: {
          url: url
        }
      }
    )
  }
}

let screen = new AddonScreen()
export default screen
