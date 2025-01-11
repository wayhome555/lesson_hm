import {createRouter,createWebHashHistory} from 'vue-router'

// 配置路由
const routes = [
    {
        path:'/',
        name:'Home',
        component:() => import('../pages/Home.vue'),
        meta:{
            title:'首页',
            requireLogin:true,
        },
        children:[
            {
                path:'about', // 子路由不需要'/'
                name:'About',
                component:() => import('../pages/About.vue'),
                meta:{
                    title:'首页',
                    requireLogin:true,
                },
            }, 
        ]
    },

    {
        path:'/Login',
        name:'Login',
        component:() => import('../pages/Login.vue'),
        meta:{
            title:'登录',
            requireLogin:false,
        },
    }
]

// 创建路由
const router = createRouter({
    history:createWebHashHistory(),
    routes
})

// 路由守卫
router.beforeEach((to,from,next) => {
    document.title = to.meta.title || '掘金'
    // if(to.meta.requireLogin){
    //     next('/Login')
    //     return false
    // }else{
    //     next()
    // }
    next()
})

export default router