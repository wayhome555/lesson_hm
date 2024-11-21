function greet(name){
    return `Hello,${name}!`
}
greet("wql");

greet.language = "english";
greet.greetInChinese = function(name){
    return `你好,${name}!`
}

function invokeGreet(greetFunction,name){
    return greetFunction(name);
}

console.log(invokeGreet(greet,"wql"));