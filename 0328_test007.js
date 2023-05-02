// require 메서드를 통해 외부 모듈 가져옴
// os 모듈은 운영체제 및 관련 유틸리티에 대한 메서드와 프로퍼티 정보를 지니고 있음
// os 모듈을 사용하면 os의 메모리, 네트워크 인터페이스 정보, 버전, 아키텍처 등에 관한 정보를 불러올 수 있음
var os = require('os');

// os.hostname() : 컴퓨터의 이름을 보여줌
console.log('시스템의 hostname : %s', os.hostname());

// os.freemem() : os의 가용 메모리 정보를 바이트 단위의 정수로 반환함
// os.totalmem() : os의 총 메모리 용량을 바이트 단위의 정수로 반환함
// 즉, 시스템의 메모리 용량은 사용할 수 있는 메모리를 총 메모리 용량으로 나눈 값이다.
console.log('시스템의 메모리 : %d / %d', os.freemem(), os.totalmem());

// os.cpus() : cpu의 정보를 담은 객체를 출력함
console.log('시스템의 CPU 정보\n');
console.dir(os.cpus());

// os.networkInterfaces() : os에 할당된 네트워크 인터페이스에 대한 정보 반환
// IVv4 혹은 IPv6의 IP 주소, 넷 마스크, 맥 주소 등의 정보가 포함되어 있음
console.log('시스템의 네트워크 인터페이스 정보\n');
console.dir(os.networkInterfaces());

/*
    이외의 os 관련 메서드
    
    1. os의 커널 버전 반환. (ex. Widnow 10 Pro)
    console.log('os.version: ' + os.version);
    
    2. Node.js가 컴파일된 os의 CPU 아키텍처 정보를 반환한다. (ex. x64)
    console.log('os.arch() : ' + os.arch());
    
    3. 현재 사용자의 홈 디렉터리 정보 반환 (ex. C:\Users\XXXX)
    console.log('os.homedir() : ' + os.homedir());
    
    4. os의 릴리즈 버전 반환
    console.log('os.release() : ' + os.release());
    
    5. os의 이름을 반환 (ex. Windows_NT)
    console.log('os.type() : ' + os.type());
    
    6. os가 부팅된 이후 흐른 시간을 보여줌 (ex. 354008)
    console.log('os.uptime() : ' + os.uptime());


*/