<template>
    <div class='shopcart-container'>
        <div class="goodslist">
             <div class="mui-card" v-for="(item,i) in list" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch 
                        v-model="$store.getters.getGoodsSelected[item.id]"
                        @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                        <img :src="item.thumb_path" alt="">
                        <div class="info">
                            <h1 style="font-weight:bolder" class="title">{{item.title}}</h1>
                            <p>
                                <span class="price" >${{item.sell_price}}</span>
                                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                                <!-- 从购物车中获取商品的数量 -->
                                <!-- 创建一个空对象，循环购物车中所有的商品数据，作为{id：count} -->
                                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>
        </div>
 
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner text" >
					<div class="left">
                        <p>总计(不含运费)</p>
                        <p>已勾选商品 <span>{{$store.getters.getGoodsCountAndAmount.count}}</span>件，总价: <span>${{$store.getters.getGoodsCountAndAmount.amount}}</span></p>
                    </div>
                    <mt-button type="primary" class="btn">去结算</mt-button>
					</div>
				</div>
			</div>
    </div>
</template>

<script>
import numbox from '../sub/shopcar_numbox.vue'
export default {
    data(){
        return{
            list:[]
        }
    },
    components:{
        numbox
    },
     created() {
        this.getList()
    },
    methods: {
        getList(){
            //获取store的id，然后拼接
            var idArr = []
            this.$store.state.car.forEach(item => {
                idArr.push(item.id)
            });
            if(idArr.length<=0)
            return;
            this.$http.get('http://www.liulongbin.top:3005/api/goods/getshopcarlist/'+idArr.join(",")).then(result=>{
                if(result.body.status ==0){
                    this.list=result.body.message
                }else{

                }
            })
        },
        remove(id,index){
            //删除购物车的商品 
            this.list.splice(index,1)
            this.$store.commit('removeFormCar',id)
    }, 
    selectedChanged(id,val){
 this.$store.commit('updateGoodsSelected',{id,selected:val})
        console.log(id+'======'+val)
    }

}
}
</script>

<style lang="scss" scoped>
    .shopcart-container{
        background-color: #eee;
        overflow: hidden;
        .goodslist{
            .mui-card-content-inner{
                display: flex;
            }
            img{
                width: 60px;
                height: 60px;
                margin: 7px;
            }
            h1{
                font-size: 13px;
                margin-bottom: 15px
            }
            .info{
                
                .price{
                    color: red;
                }
            }
        }
        .text{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .btn{
                padding-top: 7px
            }
            span{
                color: red;
                font-weight: bolder;
                font-size: 16px
            }
        }
    }
</style>
