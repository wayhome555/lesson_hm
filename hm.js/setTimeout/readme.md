# 定时器

- JS是单线程 只有一个主线程
- setTimeout 是异步执行的 在主线程执行完后再执行
  callback 回调函数 放入 event loop 
  主线程会继续执行后续的同步代码，当主线程的任务执行完毕后，Event Loop 开始工作。
  ms毫秒
- 一定会在指定时间后执行吗？
- 找回？
  执行的是回调函数
- 定时器ID

- 如何用 setTimeout 实现 setInterval?
  - 场景编程题
  - 手写题
    - customInterval
    - callback t 
    - 递归
    - 关闭
