// fs 모듈 사용해서, 파일 읽고, 덮어쓰고, 다시 파일 읽어오기
// fs 모듈 가져오기
var fs = require('fs');

// 경로에 위치한 텍스트 파일 읽어오기
fs.readFile('./textFile/package.txt', 'utf8', function(err, data) {
    if(err) throw err;
    console.log(data);
    
    // 경로에 위치한 텍스트 파일을 'Hello World'로 내용 덮어쓰기
    fs.writeFile('./textFile/package.txt', 'Hello World!', function(err, data) {
        if(err) {
            console.log('Error : ' + err);
        }
        
        // 경로에 위치한 텍스트파일 읽어오기
        fs.readFile('./textFile/package.txt', 'utf8', (err, data) => {
            if(err) throw err;
            console.log('새로운 파일 내용: ', data);
        });
    });
});