//Calc객체 -> 변수
let Calc = require('./115p');

//인스턴스 객체 calc만듦
let calc = new Calc();

//on으로 만들어 놓은 stop 실행
calc.emit('stop');

//calc의 title도 calculator!
console.log(calc.title + '에 stop 이벤트 전달함')
