
function sum(a,b){
    return a+b;
}
// 和普通函数的区别在哪？
// 构造对象的过程，构造函数 constructor
// 构造函数
function Person(name,age){
    this.name = name;
    this.age = age;
}

const wen =new Person("wen",18);

console.log(wen);

const chen = new Person("chen",19);

console.log(chen);