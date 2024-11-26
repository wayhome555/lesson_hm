function Person(name,age){
    this.name = name;
    this.age = age;

}
Person.prototype.name = 'kz';
Person.prototype.age = 18;
let p1 = new Person('zhang',18);
let p2 = new Person('guo',18);

console.log(p1===p2);
console.log(p1.name,p2.name);