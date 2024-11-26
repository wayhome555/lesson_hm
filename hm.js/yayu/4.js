// 一样的constructor 
// 只完成对象属性的构造过程
function Person(name,age){
    console.log(this);
    this.name = name;
    this.age = age;
}
// 每个函数都有一个原型对象
Person.prototype ={
    eat:function(){
        console.log(`${this.name} eat`);
    }
}

const xck =new Person("xck",18);
xck.eat();
const xql = new Person("xql",19);
xql.eat();