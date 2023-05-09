var http = require('http');
var fs = require('fs');
var server = http.createServer();
var host = '127.0.0.1';
var port = 3000;
server.listen(port, host, 50000, function() {
  console.log('웹 서버가 시작되었습니다.');  
});

//function(req,res)는 callback 함수이다. <시험문제>
server.on('request', function(req, res) {
    console.log('클라이언트 요청이 들어왔습니다.');
    var filename = 'puppy.png';
    fs.readFile(filename, function(err, data) {
        res.writeHead(200,{"Content-Type": "image/png"});
        res.write(data);
        res.end();
    });
});