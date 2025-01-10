import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {
  ElButton,
} from 'element3'
import 'element3/lib/theme-chalk/index.css'
import router from './router'
import { createPinia } from 'pinia'

// 启用UI组件库 开发效率提升了
createApp(App).use(createPinia()).use(router).use(ElButton).mount('#app')
