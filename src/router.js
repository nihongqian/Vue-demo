import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
// let follow = () => { return import(组件)} // import() es7 返回就是promise
// const follow = () => import(/* webpackChunkName: "follow" */ './components/follow')  指定输出chunk名和位置

const shop = () => import('./components/shop')
const shops = () => import('./components/shops')
const list = () => import('./components/list')
const proDetail = () => import('./components/proDetail')


import home from './components/home'
import login from './components/login'
import reg from './components/reg'
import my from './components/my'
// import shop from './components/shop'
// import shops from './components/shops'
// import proDetail from './components/proDetail'
import error from './components/error'
// import list from './components/list.vue'

const routes = [
  {
    path:'/home',
    component:home,
    children:[
      {path:'list/:id',component:list}
    ]
  },
  {path:'/login',component:login},
  {path:'/my',component:my},
  {path:'/reg',component:reg},
  {path:'/shop',component:shop},
  {path:'/shops',component:shops},
  {path:'/proDetail/:id',component:proDetail,name:'proDetail'},
  {path:'/',redirect:'/home'},
  {path:'*',component:error}
]

export default new Router({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return {x:0,y:0}
  }
})
