//class Person {
//    function Person(name, age) {
//        this.name = name;
//        this.age = age;
//    }
//
//    Person.prototype.walk = function(speed) {
//        console.log(speed + 'km 속도로 걸어갑니다.');
//    }
//}

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function(speed) {
    console.log(speed + 'km 속도로 걸어갑니다.');
}

var person01 = new Person('소녀시대', 20);

console.log(person01.name + '객체의 age를 호출합니다.\n' + person01.age + '\n walk(10)을 호출합니다.' + person01.walk(10));
