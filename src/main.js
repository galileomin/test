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
import moment from 'moment'
import VuePreview from 'vue-Preview'
import Vuex from 'vuex'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VuePreview)
Vue.use(Vuex)
//post表单数据组织形式
Vue.http.options.emulateJSON = true

var car = JSON.parse(localStorage.getItem('car')||'[]')
var  store = new Vuex.Store({
     state:{      //this.$store.state.
            car:car   //购物车商品数据,主要存储id 数量 单价 是否选中
     },
     mutations:{  //this.$store.commit('',obj)
      addToCar(state,goodsinfo){
            var flag = false
            state.car.some(item=>{
                  if(item.id==goodsinfo.id){
                        item.count+=parseInt(goodsinfo.count)
                        flag= true
                        return true
                  }
            })
            if(flag==false){
                  state.car.push(goodsinfo)
            }
            localStorage.setItem('car',JSON.stringify(state.car))
      },
      updateGoodsinfo(state,goodsinfo){
            state.car.some(item=>{
                  if(item.id==goodsinfo.id){
                        item.count=parseInt(goodsinfo.count)
                        return true
                  }
            })
             localStorage.setItem('car',JSON.stringify(state.car))
      },
      removeFormCar(state,id){
            state.car.some((item,i)=>{
                  if(item.id==id){
                        state.car.splice(i,1)
                        return true
                  }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
      },
      updateGoodsSelected(state,info){
            state.car.some(item=>{
                  if(item.id==info.id){
                  item.selected=info.selected
                  }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
      }
     },
     getters:{    //this.$store.getters.
            sumOfCount(state){
                  var sum = 0
                  state.car.forEach(item=>{
                        sum+=item.count
                  })
                  return sum
            },
            getGoodsCount(state){
                  var o ={}
                  state.car.forEach(item=>{
                        o[item.id]=item.count
                  })
                  return o
            },
            getGoodsSelected(state){
                  var o={}
                  state.car.forEach(item=>{
                        o[item.id]=item.selected
                  })
                  return o
            },
            getGoodsCountAndAmount(state){
                  var o ={
                        count:0,amount:0
                  }
                  state.car.forEach(item=>{
                        if(item.selected==true){
                              o.count+=item.count;
                              o.amount+=item.price*item.count
                        }
                  })
                  return o
            }
            
     }
      
})
Vue.use(Mint)
Vue.filter('dateFormat',function (dataStr,pattern="YYYY-MM-DD HH:mm:ss") {
      return moment(dataStr).format(pattern)
})

var vm =new Vue({
     el:'#app',
     render:c=>c(app),
     router,
     store

})