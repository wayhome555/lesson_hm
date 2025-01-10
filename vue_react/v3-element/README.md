- 如何开发一个vue项目
  - vite 工程化
    npm init vite
  - vue 核心语法（响应式，组件化，指令）
  - vue-router
  - pinia
  - element
  - stylus
  - axios ajax 请求封装库
  
- app.use
  向vue app 中注册插件 生态
  element3 提供的组件可以全局使用
  - 注意问题
  - element3 组件 以el-开头
  - 不要重复造轮子 70%的常见组件需求
  - 性能问题 页面打开会变慢 ues Element3 开销太大

## 项目亮点
- 按需加载vue组件库element3 性能优化 加载速度
- 良好的注释 代码规范
- 项目全面使用es6+风格 代码简洁易读 易维护
- 路由
  - 多级路由
    二级路由 path 前面不用 /
  - path component name meta
  - 必须做路由懒加载
    最佳用户体验是快
    按需加载页面级别组件 import函数引入方式 () => import('')
  - 路由守卫 meta
    
