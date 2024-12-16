// String

console.log(String()) // ''
console.log(String(false)) // 'false'
console.log(String(true)) // 'true'
console.log(String(+0)) // '0'
console.log(String(-0)) // '-0'
console.log(String(NaN)) // 'NaN'
console.log(String(undefined)) // 'undefined'
console.log(String(null)) // 'null'
console.log(String(123)) // '123'

function a(){}
console.log(String(a)) // 'function a(){}'

console.log(String(1/0)) // 'Infinity'