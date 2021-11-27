var fs = require('fs')
var createHTML = require('create-html')
const osu = require('node-os-utils')
const cpu = osu.cpu
const http = require('http');
let model=cpu.model()
let os = osu.os
let proc = osu.proc
var mem = osu.mem

let ram = mem.totalMem()/1000000000
let ostring=""
os.oos()
  .then(info => {
    ostring=info
  })
  proc.totalProcesses()
  .then(info => {
    process=info
  })
ip=os.ip()
arch=os.arch()

var html = createHTML({
  title: 'SystemInfo',
  scriptAsync: true,
  lang: 'en',
  head: '<meta name="description" content="example"> <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">',
  body: "<table class=" + "table table-dark" + "><thead><tr><th scope=" + "col" + ">CPU</th><th scope=" + "col" + ">RAM</th><th scope=" + "col" + ">IP</th><th scope=" + "col" + " + "+ ">Total Process</th></tr><th scope=" + "col" + " + "+ ">OS</th></tr></thead><tbody><tr><td>" + model + "</td><td>" + ram + " GB" +"</td><td>" + ip +"</td><td>" + process +"</td><td>" + ostring +"</td>"
})
 
fs.writeFile('index.html', html, function (err) {
  if (err) console.log(err)
})
