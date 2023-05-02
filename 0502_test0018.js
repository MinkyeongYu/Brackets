// 'tick' 이름의 이벤트 리스너 추가
process.on('tick', function(count) {
    console.log('tick event occurred : %s', count);
});

// 5초 후에 이벤트 발생하도록 함
setTimeout(function () {
    console.log('5초 후에 tick 이벤트 전달 시도');
    //이벤트 전송 메소드
    process.emit('tick', 5)
    // 5000ms == 5s
}, 5000);