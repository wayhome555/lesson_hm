let objWithStringValue = {
    valueOf:function(){
        return '123';
    }
}

console.log(Number(objWithStringValue))