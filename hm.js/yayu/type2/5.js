// Object => Primitive

let specialObj = {
    valueOf:function(){
        console.log('calling valueof')
        return 123;
    },
    toString:function(){
        console.log('calling toString')
        return '456';
    }
}

console.log(Number(specialObj)); // 123
console.log(String(specialObj)); // 456

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
    console.log(e); // TypeError: Cannot convert object to primitive value
}