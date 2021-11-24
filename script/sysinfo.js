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

//create a server object:
http.createServer(function (req, res) {
  res.write("<h1>CPU Model:</h1><a>" + model +"<a> with arch:" + arch + "</a>" + "<h1>Total RAM:</h1><a>" + ram + " GB </a>"+ "<h1>OS:</h1><a>" + ostring + "</a>"+ "<h1>Your local IP:</h1><a>" + ip + "</a>"+ "<h1>Total of process is:</h1><a>" + process + "</a>"); //write a response to the client
  res.end(); //end the response
}).listen(8081); //the server object listens on port 8081
