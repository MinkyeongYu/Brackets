// result 변수 값을 0으로 설정
var result = 0;

// duration_sum에 실행 시간을 측정하기 위한 시작시간을 기록함
console.time('duration_sum');

//result에 1부터 100,000,000까지 더한 값을 저장함.
for(var i = 1; i <= 100000000; i++) {
    result += i;
}

// duration_sum에 실행 시간을 측정하기 위한 끝 시간을 기록함
console.timeEnd('duration_sum');
console.log('1부터 100.000.000까지 더한 결과물 : %d', result);

// __filename : 현재 실행 중인 파일의 경로
console.log('현재 실행한 파일의 이름 : %s', __filename);
// __dirname : 현재 실행 중인 폴더의 경로 
console.log('현재 실행한 파일의 패스 : #s', __dirname);

// 객체 생성
var Person = { name : '소녀시대', age : 20};
// Person 객제 속성 모두 출력 
console.dir(Person);