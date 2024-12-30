// es6 代理对象
// 一个空对象
const proxy = new Proxy({},{
    // 拦截器
    get:function(obj,prop){
        console.log('get',prop)
        return obj[prop]
    },
    set:function(obj,prop,value){
        console.log('set',prop,value)
        obj[prop] = value
    }
})

proxy.time = 35
console.log(proxy.time)