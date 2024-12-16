
console.log(1/0); // Infinity 正无穷
console.log(-1/0); // -Infinity 负无穷

console.log(Object.is(1, 1)); // true
console.log(Object.is(+0, -0)); // false

console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true

console.log(2 * 'a'); // NaN(not a number)
console.log(typeof(NaN)); // number
console.log(2 + 'a'); // 2a

console.log(parseInt('1a1')); 
console.log(NaN === NaN); // false 

console.log(isNaN(NaN),isNaN(parseInt('1a1')))