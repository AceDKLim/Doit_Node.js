let util = require('util');
let EventEmitter = require('events').EventEmitter;


let Calc = function () {
    //let self = this; 이놈의 역할이 뭘까?
    this.on('stop', function () {
        console.log('Calc에 stop event 전달됨.');
    });
};

//util 모듈의 inherits() 메소드 사용해  EventEmitter상속
util.inherits(Calc, EventEmitter);

//Calc의 prototype 속성으로 add 추가 -> Calc의 인스턴스 객체 만들었을 때 add 사용 가능
Calc.prototype.add = function (a, b) {
    return a + b;
}

//module.exports에 Calc 등록 -> 불러오는 쪽에서 접근 가능, title은 calculator로
module.exports = Calc;
module.exports.title = 'calculator';