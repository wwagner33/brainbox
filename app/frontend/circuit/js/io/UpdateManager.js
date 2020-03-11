import conf from '../Configuration'


class UpdateManager {

  /**
   * @constructor
   *
   */
  constructor() {
  }

  getUpdates() {
    return $.ajax({
      url: conf.updates.shapes,
      xhrFields: {
        withCredentials: true
      }
    }).then((response) => {
      // happens in "serverless" mode on the gh-pages/docs installation
      //
      if (typeof response === "string")
        response = JSON.parse(response)

      console.log(response)
      return response
    })
  }

}

let update = new UpdateManager()
export default update
