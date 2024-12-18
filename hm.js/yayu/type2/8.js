console.log(1 + '1') // 11

console.log( + '1') // 1

console.log( + []); // 0

console.log( + ['1']) // 1

console.log( + {}) // NaN 

console.log([] + {}) // [object Object]

console.log([] + []) // ""

console.log({} + {}) // [object Object][object Object]

console.log(true == 2) // false