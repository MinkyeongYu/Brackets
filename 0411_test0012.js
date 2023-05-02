//splice() 실습
// UESRS 이름의 배열 생성
var Users = [ 
    {name:'소녀시대', age:0}, 
    {name:'걸스데이', age:1},
    {name:'BTS', age:2},
    {name:'빅뱅', age:3},
    {name:'블랙핑크', age:4},
    {name:'원더걸스', age:5},
];

console.log('배열 요소의 수 : %d', Users.length);

// index 1에 해당 요소를 추가함.
Users.splice(1, 0, {name:'애프터스쿨', age:25});
console.log('splice()로 요소를 인덱스 1에 추가한 후');
console.dir(Users);

// index 2부터 1개의 요소를 제거함.
//Users.splice(2, 1);
//console.log('splice()로 인덱스 2부터 요소를 1개 삭제한 후');
//console.dir(Users);

//index 2부터 3개의 요소 제거함
Users.splice(2,3);
console.log('splice()로 인덱스 2부터 요소를 3개 삭제한 후');
console.dir(Users);

// -----------------------------------------------------------------------------------------------
// slice 실습
// slice(a, n); => a번째 index부터 (n-1)번째 index까지 잘라서 새로운 배열로 만든다.  - 기말고사 시험문제

//Users 배열 먼저 탐색
console.log('배열 요소의 수: %d', Users.length);
console.log('원본 Users: ');
console.log(Users);

// Users 배열의 1번째,2번째 인덱스에 해당하는 요소를 가져와서 새로운 배열 Users2생성
var Users2 = Users.slice(1,3);
console.log('slice()로 잘라 만든 새로운 배열 Uers2');
console.dir(Users2);

// Users2 배열의 1번째 인덱스에 해당하는 요소를 가져와서 새로운 배열 Users3 생성
var Users3 = Users2.slice(1);
console.log('slice()로 잘라 만든 새로운 배열 Users3');
console.dir(Users3);