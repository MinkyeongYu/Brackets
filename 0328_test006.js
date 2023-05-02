// require 메서드를 통해 외부 모듈 가져옴
// nconf는 시스템 환경변수에 접근할 수 있게 함
var nconf = require('nconf');

// 환경변수에 대한 정보를 가져옴
nconf.env();
// os 환경변수의 값을 출력함
console.log('OS 환경 변수의 값 : %s', nconf.get('OS'));

// console.log와 console.dir의 차이점?
// console.dir() : 자바스크립트 객체의 속성들을 출력함 - html로 따지면 <html>전체가 출력됨
// console.log() : log 내부의 매개변수를 출력함. - html로 따지면 <body>부분만 출력됨