const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  fs = require('fs');

  fs.readFile('/var/log/debug', 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      fs.writeFile('debug.txt', data, function (err) {
          if (err) return console.log(err);
          res.end(data);
        });
    });
  
}

const server = http.createServer(requestListener);
server.listen(8080);
