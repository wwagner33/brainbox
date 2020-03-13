import {Remarkable, utils} from "remarkable"

export default class MarkdownDialog {

  constructor() {
    this.defaults = {
      html: true,             // Enable HTML tags in source
      xhtmlOut: false,        // Use '/' to close single tags (<br />)
      breaks: false,          // Convert '\n' in paragraphs into <br>
      langPrefix: 'language-',// CSS language prefix for fenced blocks
      linkTarget: '_blank',   // set target to open link in
      typographer: true       // Enable smartypants and other sweet transforms
    }
  }

  show(markdown, version) {
    let markdownParser = new Remarkable('full', this.defaults)
    markdownParser.inline.validateLink = this.validateLink
    $('#markdownDialog .html').html(markdownParser.render(markdown))
    $('#markdownDialog .version').html(version)
    $('#markdownDialog').modal('show')
  }

  validateLink(url) {
    let BAD_PROTOCOLS = [ 'vbscript', 'javascript', 'file'];
    let str = url.trim().toLowerCase();
    // Care about digital entities "javascript&#x3A;alert(1)"
    str = utils.replaceEntities(str);
    if (str.indexOf(':') !== -1 && BAD_PROTOCOLS.indexOf(str.split(':')[0]) !== -1) {
      return false;
    }
    return true;
  }
}
