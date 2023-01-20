let Users = [{ name: '소녀시대', age: 20 }, { name: '걸스데이', age: 22 }, { name: '티아라', age: 23 }]

console.log('forEach문 사용하기')
Users.forEach(function (item, index) {
    console.log('배열요소 #' + index + ' : ' + item.name);
});