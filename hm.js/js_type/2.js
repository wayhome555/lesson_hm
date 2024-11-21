let obj = {
    name:"wql",
    job:"student",
    company:"byteDance",
}

obj.hometown = "nanchang";

let a = 1;
//拷贝式赋值
let b = a;

let obj2=obj;//引用式赋值

obj2.name="wql2";
console.log(a,b);
console.log(obj,obj2);