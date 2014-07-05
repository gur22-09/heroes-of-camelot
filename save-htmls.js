// To generate all static assets:
//   phantomjs save-htmls.js index.html cards/* combos/*

var page = require('webpage').create()
var fs = require('fs')
var system = require('system')

page.settings = {
  loadImages: false,
  javascriptEnabled: true,
  loadPlugins: false,
  userAgent: 'XXX'
}
function enableGoogleAnalytics(s){
  return s.replace(/    \/\/ /g, '    ')
}
function removeNgTemplates(s){
  var firstTemplateIndex = s.indexOf('  <script type="text/ng-template"')
  var lastTemplateIndex = s.lastIndexOf('  <script type="text/ng-template"')
  var lastTemplateCloseTagIndex = s.indexOf('</script>', lastTemplateIndex)
  if (firstTemplateIndex >= 0 && lastTemplateIndex >= 0 && lastTemplateCloseTagIndex >= 0) {
    return s.substring(0, firstTemplateIndex) + s.substring(lastTemplateCloseTagIndex + 9)
  } else {
    console.log('something is wrong', firstTemplateIndex, lastTemplateIndex, lastTemplateCloseTagIndex)
  }
}
function removeScripts(s){
  var index = s.indexOf('<script')
  var last_script_index = s.lastIndexOf('<script')
  while (index >= 0 && index < last_script_index){
    var endIndex = s.indexOf('</script>', index)
    s = s.substring(0, index) + s.substring(endIndex + 9)
    index = s.indexOf('<script')
    last_script_index = s.lastIndexOf('<script')
  }
  return s
}

function compactHTML(s){
  // remove css added by angular
  s = s.replace('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}</style>', '')
  // remove comments generated by angular
  s = s.replace(/<!--[^-]+-->/g, '')
  // remove ng-* attributes from elements
  s = s.replace(/ ?\bng-[a-z-]+="[^"]*"/g, '')
  // remoge ng-* class names
  s = s.replace(/ ?\bng-[a-z-]+/g, '')
  // remove empty class attributes
  s = s.replace(/ ?\bclass=""/g, '')
  // remove add/remove buttons
  s = s.replace(/<button class="btn btn-primary">I have this card<\/button>/g, '')
  s = s.replace(/<button class="btn btn-danger">Remove this card<\/button>/g, '')
  // remove empty lines
  s = s.replace(/^ +$/gm, '')
  s = s.replace(/\n\n+/g, '\n')
  return s
}

function savePage(path, callback){
  console.log('saving page', path)
  page.open('http://localhost:9292/' + path, function () {
    page.evaluate(function(){

    })

    var s = page.content
    s = enableGoogleAnalytics(s)
    // s = removeNgTemplates(s)
    s = removeScripts(s)
    s = compactHTML(s)
    var filename = 'static/'+path
    fs.write(filename, s, 'w')
    callback()
  })
}

var pages = []
for (var i = 1; i < system.args.length; i++) {
  var pagename = system.args[i].replace('s/', '/').replace('.jpg', '')
  pages.push(pagename)
}
function saveFirstPage(){
  if (pages.length > 0) {
    var path = pages[0]
    pages.splice(0, 1)
    savePage(path, saveFirstPage)
  } else {
    phantom.exit()
  }
}

saveFirstPage()
