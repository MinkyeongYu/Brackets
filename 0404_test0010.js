// person 객체 생성
// 객체 멤버는 age, name, add()로 구성됨
var person = {
    age: 20,
    name: '소녀시대',
    // var add = function(a, b) { return a + b; }; 와 의미가 같음
    // 두 개의 매개변수를 인자로 받아 더한 값을 반환함
    add: function(a,b){
        return a+b;
    }
}

// Person객체의 age 부분에 접근
console.log("나이 : %d",person.age);
// Person객체의 name 부분에 접근
console.log("이름 : %s",person.name);
// Person객체의 add() 부분에 접근
// argument 10과 20을 더한 값(30)이 출력됨. 
console.log("더하기 : %d",person.add(10,20));