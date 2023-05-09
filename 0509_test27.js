var http = require('http');
var fs = require('fs');
var server = http.createServer();
var host = '127.0.0.1';
var port = 3000;
server.listen(port, host, 50000, function() {
  console.log('웹 서버가 시작되었습니다.');  
});

//pipe() 사용
server.on('request', function(req, res) {
    console.log('클라이언트 요청이 들어왔습니다.');
	
    var filename = 'puppy.png';
    var infile = fs.createReadStream(filename, {flags: 'r'} );
    //시험문제 출제
    infile.pipe(res);
	 
});
