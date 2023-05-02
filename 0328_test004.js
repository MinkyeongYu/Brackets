// process.argv에는 현재 파일을 run하면서 실행되는 파일들의 경로가 저장된다.
// 즉, 프로세스를 실행할 때 전달되는 파라미터 정보를 가지고 있다.
// 1. nodejs파일경로
// 2. 현재 파일경로
console.log('argv 속성의 파라미터 수 : ' + process.argv.length);
// 위에서 언급한 파일들의 경로를 모두 출력하여 보여준다.
console.dir(process.argv);

// argv 속성의 파라미터 각각에 익명함수 실행.
// 파라미터 각각의 속성은 item에 저장됨. index는 파라미터의 인덱스 값.
process.argv.forEach(function (item, index) {
    // 각 인덱스에 해당하는 요소의 값을 출력하는 내용.
    console.log(index + ':', item);
});