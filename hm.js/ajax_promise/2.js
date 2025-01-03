// 实例化时 传递函数 里面装耗时性任务
const p = new Promise((resolve,reject) => { //executor 执行器
    console.log('333'); // 同步任务
    setTimeout(() => {
        console.log('222'); // 异步任务 event loop
        //resolve(); // 异步任务执行完 执行resolve
        resolve('BMW');
    }, 1000);
});
// 异步任务的执行顺序控制的话 用promise
console.log(p.__proto__, p);
p.then((data) => {
    // 等到executor异步任务执行完 再执行then里面的函数
    console.log('444');
    console.log(p);
    console.log(data);
})
.catch(() => {
    console.log('error');
});
console.log('111');