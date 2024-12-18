// // Object => Primitive

// let specialObj = {
//     valueOf:function(){
//         console.log('calling valueof')
//         return 123;
//     },
//     toString:function(){
//         console.log('calling toString')
//         return '456';
//     }
// }

// console.log(Number(specialObj));  
// console.log(String(specialObj)); 

let objectWithoutPrimitiveValueOf = {
    valueOf:function(){
        console.log('calling valueof')
        return this;
    },
    toString:function(){
        console.log('calling toString')
        return this;
    }
}

try{
console.log(Number(objectWithoutPrimitiveValueOf));}
catch(e){
    console.log(e);
}