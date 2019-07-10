import VueRouter from 'vue-router'
import home from './components/tabbar/home.vue'
import Plus from './components/tabbar/Plus.vue'
import shopcart from './components/tabbar/shopcart.vue'
import search from './components/tabbar/search.vue'
import newlist from './components/news/newList.vue'
import newsinfo from './components/news/newsInfo.vue'
import photolist from './components/photos/photoList.vue'
import photoinfo from './components/photos/photoinfo.vue'
import goodslist from './components/goods/goodsList.vue'
import goodsinfo from './components/goods/goodsinfo.vue'
import message from './components/message/message.vue'
import goodsdesc from './components/goods/goodsDesc.vue'
import goodscom from './components/goods/goodscom.vue'
var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/Plus',component:Plus},
        {path:'/search',component:search},
        {path:'/shopCart',component:shopcart},
        {path:'/home/newlist',component:newlist},
        {path:'/home/newsinfo/:id', component:newsinfo},
        {path:'/home/photolist', component:photolist},
        {path:'/home/photoinfo/:id', component:photoinfo},
        {path:'/home/goodslist', component:goodslist},
        {path:'/home/goodsinfo/:id', component:goodsinfo},
        {path:'/home/message', component:message},
        {path:'/home/goodsdesc/:id', component:goodsdesc,name:'goodsdesc'},
        {path:'/home/goodscom/:id', component:goodscom,name:'goodscom'},

    ],
    linkActiveClass:'mui-active'  //覆盖默认路由高亮类  router-link-active
})

export default router