var a = 1;
console.log(typeof(a),a.toFixed(2)) // number 1.00
var b  = new Number(a);
// valueof
console.log(typeof(b)) // object
console.log(b.toFixed(2)) // 1.00