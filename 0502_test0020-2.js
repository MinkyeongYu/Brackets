//readFile 메소드 사용하면서 콜백 함수를 파라미터로 전달
// fs 모듈 가져오기
var fs = require('fs');

// 파일의 내용을 'Hello World!'로 초기화한다. (비동기식)
fs.writeFile('./textFile/package.txt', 'Hello World!', function(err) {
    
    if(err) {
        console.log('Error : ' + err);
    }
    console.log('output.txt 파일에 데이터 쓰기 완료.');
});