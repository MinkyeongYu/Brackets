// Person 객체 생성
var Person = [];
// Person.age에 20 저장
Person["age"] = 20;
//Person.name에 '소녀시대' 저장
Person["name"] = '소녀시대';
//Person.mobile에 '010-1000-1000' 저장
Person ["mobile"] = '010-1000-1000';
//Person.mobile2에 '010-1000-1000' 저장
Person.mobile2 = '010-1000-1000';
//Person.name2에 '소녀시대2' 저장
Person.name2 = '소녀시대2';

// %d는 정수 값, %s는 string값을 받을 때 사용함
// Person객체의 age 부분에 접근
console.log("나이: %d",Person.age);
// Person객체의 name 부분에 접근
console.log("이름: %s",Person.name);
// Person객체의 mobile2 부분에 접근
console.log("전화1: %s",Person.mobile2);
// Person객체의 mobile 부분에 접근, Person.mobile로 접근할 수 있음
console.log("전화2: %s",Person["mobile"]);
// Person객체의 name2 부분에 접근
console.log("이름2: %s",Person.name2);