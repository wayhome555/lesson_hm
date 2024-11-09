// ReferenceError: b is not defined
function foo(a){
    b = a;
    console.log(a+b);
    /*b = a;*/
    console.log(b);
}
foo(1);