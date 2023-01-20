var Users = [{ name: '소녀시대', age: 20 }, { name: '걸스데이', age: 22 }]

var add = function (a, b) {
    return a + b;
};
//배열의 요소로 함수를 집어넣음 변수만 들어가는게 아님
Users.push(add);

console.log('배열 요소의 수 : %d', Users.length);
console.log('세 번째 요소로 추가된 함수 실행 : %d', Users[2](10, 10));