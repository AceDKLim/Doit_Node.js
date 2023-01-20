var Person = {};

Person['age'] = 26;
Person['name'] = '임동균';
Person.mobile = '010-3170-9934'
Person.add1 = function (a, b) { return a + b; };

var add2 = function (a, b) { return a + b; };
Person['add3'] = add2;

console.log('나이 : %d', Person.age);
console.log('이름 : %s', Person.name);
console.log('전번 : %s', Person['mobile']);
console.log('더하기1 : %d', Person.add1(10, 10));
console.log('더하기3 : %d', Person.add3(10, 10));

var Person2 = {
    age: 24,
    name: '이유정',
    add: function (a, b) {
        return a + b;
    }
};

console.log('더하기 : %d', Person2.add(10, 10));