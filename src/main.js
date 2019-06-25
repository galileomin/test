import Vue from 'vue'
import Mint from 'mint-ui'
import app from './app.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'mint-ui/lib/style.css'
import './lib/Mui/css/mui.css'
import './lib/Mui/css/icons-extra.css'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import router from './router.js'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Mint)


var vm =new Vue({
     el:'#app',
     render:c=>c(app),
     router
})