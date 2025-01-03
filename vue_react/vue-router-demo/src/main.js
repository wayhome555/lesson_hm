import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // 自动导入index.js

// vue 的周边生态
createApp(App) // 根组件
// app .use(store) // 状态管理
.use(router) // 路由
.mount('#app') // 挂载
