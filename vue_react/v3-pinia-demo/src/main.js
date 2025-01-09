import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// vue 全家桶的最后一个 状态管理库
import { createPinia } from 'pinia'

const app = createApp(App)
// 大型项目
// 返回pinia实例化对象 
const pinia = createPinia()
app
.use(pinia)
.mount('#app')
