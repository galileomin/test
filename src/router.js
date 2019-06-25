import VueRouter from 'vue-router'
import home from './components/tabbar/home.vue'
import Plus from './components/tabbar/Plus.vue'
import shopcart from './components/tabbar/shopcart.vue'
import search from './components/tabbar/search.vue'
var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/Plus',component:Plus},
        {path:'/search',component:search},
        {path:'/shopCart',component:shopcart},

    ],
    linkActiveClass:'mui-active'  //覆盖默认路由高亮类  router-link-active
})

export default router