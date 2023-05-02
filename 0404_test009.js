// 매개변수 2개를 인자로 받아, 더해주는 함수 add()
function add(a,b) {
    return a+b;
}

// add()를 호출하여, result 변수에 10과 20을 더한 값(30)을 저장
var result = add(10,20);
console.log("더하기(10,20) : %d",result);

// 매개변수 2개를 더해주는 함수를 또 다른 방식으로 생성함
// 익명함수를 할당하는 방식
var add2 = function (a,b) {
    return a+b;
};

// add2()를 호출하여, result 변수에 10과 30을 더한 값(40) 저장
var result2 = add2(10,30);
console.log('더하기 (10,30) : %d',result2);