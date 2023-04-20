import {createRouter, createWebHashHistory} from 'vue-router'

const home = () => import('~/components/home.vue')
const login = () => import('~/components/login.vue')
const notFound = () => import('~/components/404.vue')

const description = () => import('~/components/main/description.vue')
const information = () => import('~/components/main/information.vue')
const management = () => import('~/components/main/management.vue')
const detection = () => import('~/components/main/detection.vue')
const user = () => import('~/components/main/user.vue')

const screen = () => import('~/components/screen/screen.vue')
const details = () => import('~/components/main/details.vue')

// const ros = () => import('~/components/echarts/ros.vue')
const Progress = () => import('~/components/echarts/progressBar.vue')
const info = () => import('~/components/main/expInfo.vue')

const routes = [
    {
    path: '/',
    redirect: '/login'
    },
    {
        path: '/home',
        name: 'home',
        component: home,
        redirect: '/description',
        children: [
            {
                path: '/description',
                name: 'description',
                component: description
            },
            {
                path: '/information',
                name: 'information',
                component: information
            },
            {
                path: '/management',
                name: 'management',
                component: management,
            },
            {
                path: '/detection',
                name: 'detection',
                component: detection
            },
            {
                path: '/user',
                name: 'user',
                component: user
            },
            {
                path: '/info',
                name: 'info',
                component: info
            },
            {
            path: '/screen',
            name: 'screen',
            component: screen,
            },
        ]
    },
    {
        path: '/progress',
        name: 'progress',
        component: Progress
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    // {
    //   path: '/ros',
    //   name: 'ros',
    //   component: ros
    // },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: notFound
    },

]

const router = createRouter({
       history: createWebHashHistory(),
       routes,
})

// 挂载路由导航守卫,to表示将要访问的路径，from表示从哪里来，next是下一个要做的操作 next('/login')强制跳转login
router.beforeEach((to, from, next) => {
    // 访问登录页，放行
    if (to.path === '/login') {
        return next()
    }
    // 获取token
    const tokenStr = window.sessionStorage.getItem('token')
    // 没有token, 强制跳转到登录页
    if (!tokenStr) return next('/login')
    next()
})

export default router
