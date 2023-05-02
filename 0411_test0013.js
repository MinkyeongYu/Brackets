//splice() 실습
// UESRS 이름의 배열 생성
var Users = [ 
    {name:'소녀시대', age:0}, 
    {name:'걸스데이', age:1},
    {name:'BTS', age:2},
    {name:'빅뱅', age:3},
    {name:'블랙핑크', age:4},
    {name:'원더걸스', age:5},
    {name:'카라', age:6},
    {name:'아이유', age:7},
    {name:'코요테', age:8},
    {name:'폴킴', age:9},
];

// slice 실습
// slice(a, n); => a번째 index부터 (n-1)번째 index까지 잘라서 새로운 배열로 만든다.  - 기말고사 시험문제

//Users 배열 먼저 탐색
console.log('배열 요소의 수: %d', Users.length);
console.log('원본 Users: ');
console.log(Users);

// Users 배열의 1~4번째 인덱스에 해당하는 요소를 가져와서 새로운 배열 Users2생성
var Users2 = Users.slice(1,7);
console.log('slice()로 잘라 만든 새로운 배열 Uers2');
console.dir(Users2);

// Users2 배열의 1~5번째 인덱스에 해당하는 요소를 가져와서 새로운 배열 Users3 생성
var Users3 = Users2.slice(1, 5);
console.log('slice()로 잘라 만든 새로운 배열 Users3');
console.dir(Users3);

// Users3 배열의 1~3번째 인덱스에 해당하는 요소를 가져와서 새로운 배열 Users4 생성
var Users4 = Users2.slice(1, 3);
console.log('slice()로 잘라 만든 새로운 배열 Users4');
console.dir(Users4);

// Users 배열의 6~마지막 인덱스의 요소를 가져와서 새로운 배열 Users5 생성
// filter 함수를 사용할 수도 있음.
// const result = Users.filter(number => number>5);
// var Users5 = result;
var Users5 = Users.slice(6, Users.length);
console.dir(Users5);
