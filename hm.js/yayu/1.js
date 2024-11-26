// js 造人
// 对象字面量
let cao ={
    name:"cao",
}
// class 构造函数
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        console.log("eat");
    }
}

let wei = new Person("wei",18);
let li = new Person("li",19);