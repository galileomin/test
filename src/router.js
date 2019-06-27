import VueRouter from 'vue-router'
import home from './components/tabbar/home.vue'
import Plus from './components/tabbar/Plus.vue'
import shopcart from './components/tabbar/shopcart.vue'
import search from './components/tabbar/search.vue'
import newlist from './components/news/newList.vue'
import newsinfo from './components/news/newsInfo.vue'
var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/Plus',component:Plus},
        {path:'/search',component:search},
        {path:'/shopCart',component:shopcart},
        {path:'/home/newlist',component:newlist},
        {path:'/home/newsinfo/:id', component:newsinfo}

    ],
    linkActiveClass:'mui-active'  //覆盖默认路由高亮类  router-link-active
})

export default router