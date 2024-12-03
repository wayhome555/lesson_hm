var name='d';
var a = {
    name: "a",
    func1: function () {
        console.log(this.name);
    },
    func2:function(){
        // 这里使用箭头函数作为 setTimeout 的回调函数
        setTimeout(() => {
            this.func1();
        },1000);
    }
};
a.func2();
