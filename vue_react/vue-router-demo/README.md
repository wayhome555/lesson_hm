# vue 全家桶之 vue-router 路由

- vue 语法 组件（选项式 组合式） 响应式 生命周期 指令（v-bind v-model v-for v-if v-show） 三种数据（自有数据ref props computed）
  只做最核心的
- vue-router 路由 vue 周边生态

  - 
- vuex/pinia 状态管理

## vue-router
- 将接管路由 
- router-link 取代a标签
  a 标签
  router 组件包含a标签的功能 路由对应的组件显示到相应的位置
  要启用路由
  组件没有生效 无法识别的组件 -> div 元素
  - 向vue添加vue-router

- router 专门的目录
  - index.js 入口文件
  - router-link 是 vue-router 提供的组件 use(router) 不用引入就可以生效

- 业务熟练度
  - vue-router 语法细节 
    - routes 拆分 亮点
      [
        /
        /About 顶级路径
        ...users 用户模块
        ...posts 帖子模块
      ]
      展开运算符
    - path component
      - name 有用
      - props 路由传参

  - 路由历史记录 history
    router-link 而不是a 组件功能
    router.push() 入栈
    栈顶是当前的路由 显示组件
    前进 后退
    导航 = url + history navigator

  - 实战开发
    - stylus 加速css开发 省略 {} : ; 用tab缩进代替
      npm i -D stylus
    - 