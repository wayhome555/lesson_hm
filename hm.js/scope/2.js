var a = 1;
var b = 4;
function foo(){
    // 编译阶段 完成声明 undefined
    console.log(a,b);
    var a = 2;
    var a = 3;
    console.log(a,b);
}
foo();


