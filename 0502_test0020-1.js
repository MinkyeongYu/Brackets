// 비동기식(Async) 파일 읽기 => 권장됨
var fs = require('fs');

fs.readFile('./textFile/package.txt', 'utf8', function(err, data) {
    console.log(data);
});

console.log('프로젝트 폴더 안의 package.json 파일을 읽도록 요청했습니다.');