

var x = 2;

var obj = {
    x:1,
    foo:function(){
        console.log(this),
        console.log(this.x)},
}
// 
var foo = obj.foo;

var obj2 = {
    foo:foo,
}
obj2.foo();
console.log('----------------');
obj.foo();
console.log('----------------');
foo();