// 一样的constructor 
// 只完成对象属性的构造过程
function Person(name,age){
    console.log(this);
    this.name = name;
    this.age = age;
}

const wen =new Person("wen",18);