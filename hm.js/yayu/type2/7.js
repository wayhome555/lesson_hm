// 只要不是数字 + 做连接符

console.log([]+[]) // ""
// 一元运算符 隐式类型转换
console.log( + [1,2,3]) // NaN

console.log([]==[]) // false 不同的地址

let x=123;

let y ={
    valueOf:function(){
        return 123;
    }
}

console.log(x == y) // true
