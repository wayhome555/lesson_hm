function sayHello() {
    // 变量
    var name = 'tom';
    // es5 全局作用域
    
    return 'hello'+ name;
}
var age = 10;
// 代码块
// 块级作用域
    if (age > 5)
    {
        // es6 新增的let 变量声明 2015年
        var name = 'jerry';
        let dogyears = age *7 ;
        console.log('YOU ARE ' + dogyears);
    }
console.log(name)


console.log(sayHello());