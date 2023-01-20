var Person = {};

Person['age'] = 26;
Person['name'] = '임동균';
Person.mobile = '010-3170-9934'

console.log('나이 : %d', Person.age);
console.log('이름 : %s', Person.name);
console.log('전번 : %s', Person['mobile']);