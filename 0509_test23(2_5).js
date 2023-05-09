var http = require('http');
var server = http.createServer();

var host = '127.0.0.1';
var port = 5000;
server.listen(port, host, '50000', function() {
    console.log('웹 서버가 시작되었습니다2. 호스트: '+host+'포트: '+ port);
});