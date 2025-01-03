
import { 
    createRouter,  // 创建路由实例
    createWebHashHistory  // 路由模式·
  } from 'vue-router' // 插件
// 页面级别组件 views目录
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PostIndex from '../views/post/index/index1/post-index.vue'
import PostShow from '../views/post/index/show/post-show.vue'

const routes = [
    // 路由数组
    {
        path:'/', // 路径
        component : Home // 组件
    },
    {
        path:'/about',
        component : About
    },
    {
        path:'/posts',
        component : PostIndex
    },
    {
        path:'/posts/:postsId', // 动态路由
        component : PostShow
    }
]

// 路由实例
const router = createRouter({ // 创建路由
    history : createWebHashHistory(), // 路由模式
    routes // 路由配置
})

export default router