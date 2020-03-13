const axios = require('axios')
const fs = require('fs');
const { Octokit } = require("@octokit/rest");
let octo = null

const GITHUB_ORG = process.env.GITHUB_ORG || 'freegroup'
const GITHUB_REPO = process.env.GITHUB_REPO || 'brainbox.shapes'
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || null

console.log(`Connected https://github.com repo "https://github.com/${GITHUB_ORG}/${GITHUB_REPO}/".`)
if(GITHUB_TOKEN === null) {
  console.log('Upload of Shapes to the Repo is not possible due of missing GITHUB_TOKEN environment variable.')
}
else {
  octo = new Octokit({
    auth: GITHUB_TOKEN,
  })
}
module.exports = {

  getLatestShapeRelease: function (res) {

    axios.get(`https://api.github.com/repos/${GITHUB_ORG}/${GITHUB_REPO}/releases/latest`)
      .then( (response) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(response.data)
      })
      .catch( (error) => {
        res.status(error.response.status).send('Something broke!')
      })
  },

  commitShape: function(githubPath, localPath, commitMessage){
    if(GITHUB_TOKEN === null) {
      console.log('Upload of Shapes to the Repo is not possible due of missing GITHUB_TOKEN environment variable.')
      return
    }

    let formattedText =  Buffer.from(fs.readFileSync(localPath, 'utf8'), 'utf8').toString('base64')
    let repoData ={
      owner:GITHUB_ORG,
      repo:GITHUB_REPO,
      path: 'shapes/'+githubPath
    }

    octo.repos.getContents(repoData)
      .then(function (res){
        octo.repos.createOrUpdateFile(Object.assign(repoData, {
          sha: res.data.sha,
          message: commitMessage,
          content: formattedText
        }))
      })
      .catch(function (){
        octo.repos.createOrUpdateFile(Object.assign(repoData, {
          message: commitMessage,
          content: formattedText
        }))
      })

  }
}
