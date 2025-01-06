- vue3 响应式数据
  - ref.value 响应式对象 value属性 Object.defineProperty 性能好
  - reactive 响应式代理 proxy代理 开销大 
  - computed
  - 子组件并不是一个人的子组件 通过 @click 监听事件 :value 传递数据

  props 支撑 emits 发出

- 父子组件通信
  - @child-message="handleChildMessage" 自定义名称+处理函数
  - 子组件 
    - 一切由外界传递的 props 都是只读的
    - 传递出去要通过emits函数
  
