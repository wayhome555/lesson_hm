- es6 promise
  Promise 类 专门解决异步耗时性问题 执行流程可控 
  其他大型语言一般是同步的 js通过es6解决了单线程异步不好控制的问题
  Promise 让异步变同步 提供了完善解决异步任务的机制
  - 口袋 装耗时性的内容 executor 立即执行
    - resolve reject 两个函数参数
    - resolve 成功解决Promise then执行
    - reject 失败 不执行then 执行catch
  - then 方法 等他完成后
    - resolve(data) 后执行回调函数 data传给回调函数
  - catch 方法 捕获错误
    - reject(error) 后执行回调函数 error传给回调函数
  - 三种状态
    - pending 等待 实例化 之后
    - fulfilled 成功 resolve 之后
    - rejected 失败 reject 之后

  promise 语言 状态只会从 pending 到 fulfilled 或者 rejected 不会再改变