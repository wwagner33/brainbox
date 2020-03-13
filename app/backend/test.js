const { Remarkable }  = require("remarkable")
const fs = require('fs')

let md = fs.readFileSync("test.md", "utf8")

let defaults = {
  html: true,             // Enable HTML tags in source
  xhtmlOut: false,        // Use '/' to close single tags (<br />)
  breaks: false,          // Convert '\n' in paragraphs into <br>
  langPrefix: 'language-',// CSS language prefix for fenced blocks
  linkify: true,          // autoconvert URL-like texts to links
  linkTarget: '_blank',   // set target to open link in
  typographer: true       // Enable smartypants and other sweet transforms
}

let markdownParser = new Remarkable('full', this.defaults)


markdownParser = new Remarkable('full', {
  html:         false,        // Enable HTML tags in source
  xhtmlOut:     false,        // Use '/' to close single tags (<br />)
  breaks:       false,        // Convert '\n' in paragraphs into <br>
  langPrefix:   'language-',  // CSS language prefix for fenced blocks
  linkify:      true,         // autoconvert URL-like texts to links
  linkTarget:   '',           // set target to open link in

  // Enable some language-neutral replacements + quotes beautification
  typographer:  false,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
  quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML,
  // or '' if input not changed
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (__) {}

    return ''; // use external default escaping
  }
});
markdownParser.inline.validateLink = function () { return true; };
console.log(markdownParser.render(md))
