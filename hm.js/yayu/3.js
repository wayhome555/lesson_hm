function Person(name,age){
    console.log(this);
    this.name = name;
    this.age = age;
}

Person('chen',19) // 普通函数运行

const p1 = new Person('wu',19) // 构造函数运行
const p2 = new Person('li',19) 