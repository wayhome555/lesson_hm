const cy ={
    name:"cy",
    playBasketball:function(){
        console.log(`${this.name} play basketball`);
    }
}

function Person(name,age){
    console.log(this);
    this.name = name;
    this.age = age;
}
// 原型？
Person.prototype = cy;

const wu = new Person("wu",18);
wu.playBasketball();

console.log(wu.__proto__===cy);