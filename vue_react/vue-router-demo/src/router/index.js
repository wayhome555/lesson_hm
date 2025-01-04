
import { 
    createRouter,  // 创建路由实例
    createWebHashHistory  // 路由模式
  } from 'vue-router' // 插件
// 页面级别组件 views目录
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PostIndex from '../views/post/index/index1/post-index.vue'
import PostShow from '../views/post/index/show/post-show.vue'
import PostMeta from '../views/post/index/show/components/post-meta.vue'
// 文章模块
const postRoutes = [
    {
        path:'/posts',
        name : 'postIndex',
        component : PostIndex,
        // 路由向页面级别组件传参
        props:{
            sort:'popular' 
        },
        meta:{
            title:'文章列表'
        }
    },
    {
        path:'/posts/:postsId', // 动态路由
        component : PostShow
    },
    {
        path:'/posts/:postsId',
        component:PostShow,
        name:'postShow',
        props:true,
        meta:{
            title:'文章详情'
        },
        // 嵌套路由
        children:[
            {
                path:'meta',
                component:PostMeta,

            }
        ]

    }
]

const routes = [
    // 路由数组
    {
        path:'/', // 路径
        component : Home,
        meta:{
            title:'首页'
        } 
    },
    {
        path:'/about',
        
        meta:{
            requireAuth:true,
            title:'关于'
        },
        name : 'about', // 命名路由
        component : About
    },
    ...postRoutes
]

// 路由实例
const router = createRouter({ // 创建路由
    history : createWebHashHistory(), // 路由模式
    routes // 路由配置
})
// 路由守卫 钩子函数
// 每次路由的切换都会执行这个回调
router.beforeEach((to,From,next) => {
    document.title = to.meta.title || '智谱华章'
    // to 要去的路由 From 从哪里来的 next 放行
    // console.log(to,From);
    if(to.meta.requireAuth){
        //console.log('需要登录');
        // url redirect 跳转
        next('/login')
    }

    next(); // 放行
})

export default router