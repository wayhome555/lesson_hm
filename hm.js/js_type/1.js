let a = null; // 栈内存
console.log(a);
// 堆内存
let largeobject ={
    data:new Array(1000000).fill('a'),
}
// 释放内存 垃圾回收
largeobject = null;