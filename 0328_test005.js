var clac = {};

// calc에 두 parameter의 값을 더해주는 add 함수 추가.
calc.add = function (a, b) {
    return a + b;
}

// calc.add(10,10)의 결과인 '20'을 담는 변수 sum
// 여기서 add함수 안의 값 10은 argument.
var sum = calc.add(10,10);

console.log(' module로 분리하기 전 - calc.add 함수 호출 결과 : %d', calc.add(10,10));
console.log(' module로 분리한 후 - calc.add 함수의 결과를 닮은 변수 호출 : %d', sum);