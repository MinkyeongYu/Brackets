// open으로 열고, read로 읽기. 버퍼 사용
var fs = require('fs');

fs.open('./textFile/package.txt', 'r', function(err, fd) {
    if(err) throw err;
    var buf = new Buffer(20);
    console.log('버퍼 타입 : %s', Buffer.isBuffer(buf));
    
    fs.read(fd, buf, 0, buf.length, null, function(err, bytesRead, buffer) {
        if(err) throw err;
        var inStr = buffer.toString('utf8', 0, bytesRead);
        console.log('파일에서 읽은 데이터 : %s', inStr);
        console.log(err, bytesRead, buffer);
        
        fs.close(fd, function() {
            console.log('output.txt 파일을 열고 읽기 완료.');
        });
    });
    
});