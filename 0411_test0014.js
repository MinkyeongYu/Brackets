// call back 함수 실습
// 콜백함수는 자바스크립트에서 서버를 컨트롤 하기 위해 꼭 사용해야 함. 
// 일반 함수와 작동하는 것은 비슷하지만, 콜백함수는 비동기 함수이고, 코드 수정에 효율적임 => 추상화 개념과 가깝기 때문.
function add(a, b, callback) {
    var result = a + b;
    // 콜백함수가 있으면 return이 따로 필요 없음.
    callback(result);
}

function minus(a, b, callback) {
    var result = a - b;
    callback(result);
}

function mul (a, b, callback) {
    var result = a * b;
    callback(result);
}

function div (a, b, callback) {
    if(a > b) var result = a / b;
    else if (a < b) var result = b / a;
    else var result = 1;
}

add(10, 10, function(result) {
    console.log('파라미터로 전달된 콜백 함수 호출됨.');
    console.log('더하기 (10, 10)의 결과 : %d', result);
});


// 콜백 함수 실습 (번외) -----------------------------------------------
// 매개변수로 num과 함수를 받아, num의 길이만큼 함수를 실행하는 함수 정의.
function repeat(num, callback) {
    for(let i = 0; i<num; i++){
        callback("hi");
    }
}

// string을 매개변수로 받아, 출력하는 함수 정의.
function print(string){
    console.log(string);
}

// repeat의 외부함수인 print함수를 callback함수 자리에 대입한다고 생각하면 됨(추상화).
// hi가 5번 출력됨.
repeat(5, print);