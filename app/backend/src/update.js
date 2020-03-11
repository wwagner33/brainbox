const axios = require('axios')

module.exports = {


  getLatestShapeRelease: function (res) {
    axios.get('https://api.github.com/repos/freegroup/brainbox.shapes/releases/latest')
      .then(function (response) {
        res.setHeader('Content-Type', 'application/json')
        res.send(response.data)
      });
  }
}
