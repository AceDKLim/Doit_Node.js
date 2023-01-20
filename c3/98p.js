let Users = [{ name: '소녀시대', age: 20 }, { name: '걸스데이', age: 22 }, { name: '티아라', age: 23 }]

console.log(Users);
Users.splice(1, 0, { name: '애프터스쿨', age: 25 });
console.log('splice로 요소 1번 인덱스에 요소 추가한 후');
console.log(Users);
console.log();
Users.splice(2, 1);
console.log('splice로 요소 2번 인덱스 요소 삭제');
console.log(Users);