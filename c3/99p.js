let Users = [{ name: '소녀시대', age: 20 }, { name: '걸스데이', age: 22 }, { name: '티아라', age: 23 }, { name: '애프터스쿨', age: 25 }]

console.log('배열 요소의 수 : %d', Users.length);
console.log('원본 Users')
console.log(Users);

let Users2 = Users.slice(1, 3);
console.log('Users를 slice()로 잘라낸 Users2')
console.log(Users2);

let Users3 = Users2.slice(1);
console.log('Users2를 slice()로 잘라낸 Users3')
console.log(Users3);
