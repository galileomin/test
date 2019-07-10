<template>
    <div class="goodsinfo-container" >
        <transition
        @before-enter='beforeEnter'
        @enter='enter'
        @after-enter='afterEnter'>
             <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
       
        <div class="mui-card">
            <div class="mui-card-content">
            <div class="mui-card-content-inner">
            <mt-swipe :auto="3000">
            <mt-swipe-item v-for="item in img" :key="item.src"> 
            <img :src="item.src">
            </mt-swipe-item>  
            </mt-swipe>
					</div>
				</div>
			</div>
        <div class="mui-card">
				<div class="mui-card-header">{{info.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <p class="price">市场价:<del>${{info.market_price}}</del>&nbsp;<span class="nowprice">销售价:${{info.sell_price}}</span></p>
                        <p>购买数量:<numbox @listenCount="getCount" :max="info.stock_quantity"></numbox></p>
                        <p ><mt-button type="primary" size="small" class="button">立即购买</mt-button>
                           <mt-button type="danger" size="small" class="button" @click="add()">加入购物车</mt-button>      
                        </p>
                        
					</div>
				</div>
			</div>
        <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号:{{info.goods_no}}</p><p>库存情况:{{info.stock_quantity}}</p><p>上架时间:{{info.add_time | dateFormat}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" size="large"  plain class="button" @click="goDesc(id)">图文介绍</mt-button>
                    <mt-button type="danger" size="large" plain class="button" @click="goCom(id)">商品评论</mt-button> 
			</div>
    </div>
    </div>
</template>

<script>
import numbox from "../sub/goodsinfo_numbox.vue"
export default {
    data() {
        return {
            id:this.$route.params.id,
            img:[],
            info:{},
            ballFlag:false,
            goodsCount:1
        }
    },
    created() {
        this.getImg();
         this.getGoodsInfo()
    },
    methods: {
        getImg(){
            this.$http.get('http://www.liulongbin.top:3005/api/getthumimages/'+this.id).then(reusult=>{
                if(reusult.body.status ==0){
                    this.img=reusult.body.message
                }else{

                }
            })
        },
        getGoodsInfo(){
            this.$http.get('http://www.liulongbin.top:3005/api/goods/getinfo/' + this.id).then(reusult=>{
                if(reusult.body.status ==0){
                    this.info=reusult.body.message[0]
                }else{

                }
            })
        },
        //编程式导航
        goDesc(id){
            this.$router.push({name:'goodsdesc',params:{id}})
        },
        goCom(id){
            this.$router.push({name:'goodscom',params:{id}})
        },
        add(){
            this.ballFlag=!this.ballFlag;
            var goodsInfo = {id:this.id,count:this.goodsCount,price:this.info.sell_price,selected:true};
            this.$store.commit('addToCar',goodsInfo)

        },
        beforeEnter(el){
            el.style.transform="translate(0,0)"
            
        },
        enter(el,done){
            el.offsetWidth;
            //获取小球在页面中的位置
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            //购物车图标在页面中的位置
            const badgePosition = document.getElementById('badge').getBoundingClientRect();
            const x =badgePosition.left - ballPosition.left;
            const y =badgePosition.top - ballPosition.top;

            el.style.transform="translate("+ x +"px,"+ y +"px)";
            el.style.transition='all 0.5s cubic-bezier(.4,-0.3,1,.68)';
            done()
        },
        afterEnter(el){
            this.ballFlag=!this.ballFlag
        },
        getCount(count){
            this.goodsCount=count;
            
            
        }
    },
    components:{
        "numbox":numbox
    }
}
</script>

<style lang="scss" scoped>
 .goodsinfo-container{
     background-color: #eee;
     overflow: hidden;
     .button{
         padding: 6px
     }
 }
    .mint-swipe{
        height: 200px;
        
        .mint-swipe-item{
            text-align: center;
            img{
                height: 100%;
                

            }
            
        }
    }
.nowprice{
    color: red;
    font-size: 16px;
    font-weight: bolder
}
.mui-card-footer{
    display: block;
    button{
        margin: 10px 0
    }
}
.ball{
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    z-index: 99;
    top: 390px;
    left: 140px;
}
</style>
