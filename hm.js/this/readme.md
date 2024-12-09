# 深入 this
  this 函数运行环境指针

- 理解内存（堆内存，栈内存）对底层至关重要

- 调用栈、执行上下文、作用域、作用域链

- this 有哪几种？
  函数的调用方式相关，this的值不固定
  谁调用我，我指向谁
  - 对象的方法被调用
  - 普通函数被调用 全局对象window
    如果启用严格模式？ undefined
  - new 构造函数调用方式执行，this指向新创建的对象
  - 指定 this 调用对象

- call 
  - 类似于更换词法作用域


var name='d'
var a = {
    name: "a",
    func1: function () {
        console.log(this.name);
    },
    func2:function(){
        // this 被指定了
        setTimeout(function(){
            this.func1();
        }.call(a),1000);
    }
}

a.func2();