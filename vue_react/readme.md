- 学习路径
  - react 基础语法（B站|文档）
  - hooks 相关
  - 全家桶
  - 状态管理
  - react 源码
  - Antd ...
  - ts

- AI Coding 
  - Vue + React
  - 自然语义编程
    tailwindcss 语义
    antd 组件

  - 给一张设计稿 -> 生成组件

- http(cdn) 引入 前端组件库
  - vue
    Vue

- 挂载点
  将前端工作交给Vue或react，在html里只需要一个挂载点 #root

  挂载Vue APP 应用实例

- vue 哲学 让我们focus业务开发的现代前端框架
  - html界面上升到应用的复杂 现在前端复杂
  - Web 应用是数据驱动的界面
  - vue 事件机制 方便 @event='handler'
  - 响应式编程
    - ref(0) 包装简单数据类型成为响应式对象
    - .value = "" 修改value值的同时 界面热更新
    - 规避DOM编程
    - 不再为 API 编程 而 focus 业务开发

- App 和 传统编程的区别
  - createApp 创建 Vue App
  - #root 挂载点
  - #root 里面 就是 Vue 的世界
    {{count}}
  - {{}} 数据占位符
    不需要 document.querySelector("")
    {{ data }}
    setup 函数