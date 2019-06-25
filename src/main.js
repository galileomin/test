import Vue from 'vue'
import Mint from 'mint-ui'
import app from './app.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'mint-ui/lib/style.css'
import './lib/Mui/css/mui.css'
Vue.use(Mint)


var vm =new Vue({
     el:'#app',
     render:c=>c(app)
})