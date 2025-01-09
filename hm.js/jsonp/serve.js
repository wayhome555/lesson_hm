// http 服务启动
// 内置的http模块
// commonjs node早期 es6模块化

const http = require('http');
// 启动http服务
// 基于请求/响应的简单协议
const server = http.createServer((req, res) => {
// 异步 高并发
// 请求来到服务器后 该函数会被执行
// req 请求对象解析
// 拿到资源
// res 响应请求
// http结束
res.end('var a = 1');
})

server.listen(3000, () => {
console.log('服务启动成功')
})