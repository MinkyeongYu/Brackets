// util 모듈 가져오기
var util = require('util');
var EventEmitter = require('events').EventEmitter;
// Calc 함수 생성
var Calc = function() {
    var self = this;
    // 'stop'이라는 이벤트 리스너 등록
    this.on('stop', function() {
        console.log('Calc에 stop event 전달됨.');
    });
};
// 권장되지 않는 방식이긴 하다. extends 키워드를 사용하는 것이 좋다.
// Calc extends EventEmitter
util.inherits(Calc, EventEmitter);
// 두 개의 파라미터를 받아 매개변수에 대입하여 더하는 기능을 함.
Calc.prototype.add = function(a, b) {
    return a + b;
}
// Calc 모듈로 내보내기
module.exports = Calc;
module.exports.title = 'calculator';

// 0502_test0019 파일을 import함
var Calc = require('./0502_test0019');
// Calc 객체 생성
var calc = new Calc();
// Calc
calc.emit('stop');
console.log(Calc.title + '에 stop 이벤트 전달함.');