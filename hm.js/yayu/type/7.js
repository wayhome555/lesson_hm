console.log([1,2,3].map((v,m) => parseInt(v,m))) 

console.log([1,2,3].map((v) => parseInt(v))) 

console.log([1,2,3].map((v,index,item) =>{
console.log(v,index,item)
return parseInt(v,10);
}))