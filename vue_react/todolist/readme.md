# vue 哲学

- 前端刀耕火种的年代
  - 开发思想
    底层API DOM编程 + 事件机制
    缺点 复杂 性能差(频繁访问 修改 DOM)
    V8引擎(JS) + 渲染引擎(HTML + CSS)
    以快速显示页面为第一要务 html + css 渲染引擎 独立于JS引擎之外
    V8引擎 独立负责JS的执行
    V8 -> 渲染引擎 犹如上了高速，较远

    vue（登记） 批量的收集 DOM 的更新 减少没必要的跑路

- jquery
  JS 框架，DOM 操作简单
  $ 等封装简化了JS开发（开发者）

- web 1.0(csdn) -> web 2.0(twitter,facebook) -> web 3.0(web3)
  JS 代码量增大 性能排在第一位

- 演变到VUE / REACT 现代前端框架 
  更关注于业务开发(数据响应式 组件化) 不用在意JS dom的底层 框架封装了

  数据思维 + vue/react 实现方式 = 前端开发

- data title
- vue 提供给更关注于业务的语法 v-model
  - data title input.value 使用
  - 同时 input 输入后 data 里面的 title 也会更新

- todos 应用
  - todos 数据项
  - title 任务
  - @keydown.enter @event vue 事件监听
    .enter 事件修饰符 enter键 事件业务更快
  - 动态样式业务
    : 动态绑定 v-bind: 的缩写
    :class='{}' 双引号内部是JS运行区域