var a = 1;
console.log(typeof a); // number
var b = new Number(a); // number 对象
console.log(typeof b); // object
b.toFixed(1); // 1.0
a.toFixed(1);  // 1.0

console.log(a.toFixed(1)); // 包装类

// 装箱 和 拆箱 实现一切皆对象
(new Number(a)).toFixed(a)