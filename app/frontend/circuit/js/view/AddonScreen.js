import Hogan from 'hogan.js'
import conf from '../Configuration'
import axios from 'axios'

class AddonScreen {

  constructor() {
  }

  onShow() {
    axios.get(conf.updates.shapes)
      .then( response => {
       // happens in "serverless" mode on the gh-pages/docs installation
        //
        if (typeof response === "string")
          response = JSON.parse(response)
        else
          response = response.data

        let tmpl = Hogan.compile($("#updateTemplate").html());
        if(conf.shapes.version === response.tag_name){
          tmpl = Hogan.compile($("#uptodateTemplate").html());
        }

        let html = tmpl.render({
          current_version: conf.shapes.version,
          update: response
        });

        $("#addon .content").html(html);
        $("#addon .installButton").click(event =>{
          let element = $(event.target)
          element.append("<i class=\"fa fa-spinner fa-spin\"></i>")
          screen.onSelect(element.data("url"))
        })
      })
      .catch( error => {
        let  tmpl = Hogan.compile($("#uptodateTemplate").html());
        let html = tmpl.render({
          current_version: conf.shapes.version
        });
        $("#addon .content").html(html);
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
