var a = 1;
function fn(a) {
  
  var a = 2;
  var b = 3;
  function a() {}
  var b  = a;
}
fn(3)