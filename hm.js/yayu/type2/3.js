console.log(({a:1,b:2}).toString()); // '[object Object]'

console.log(JSON.stringify({a:1,b:2}))

console.log(Object.prototype.toString.call({a:1,b:2}))

console.log(String({a:1,b:2})) // '[object Object]'

console.log(String[1,2]); // '1,2'

console.log((() => {}).toString()); // 'function () {}'

console.log(String(new Date())); // 

