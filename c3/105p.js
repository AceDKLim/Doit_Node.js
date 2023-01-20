function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function (speed) {
    console.log(speed + 'km 속도로 걸어갑니다.');
}

let person1 = new Person('소녀시대', 20);
let person2 = new Person('걸스데이', 22);

console.log(person1.name + '객체의 walk(10)을 호출합니다.');
person1.walk(10);