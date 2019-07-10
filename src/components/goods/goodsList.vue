<template>
    <div class="goods-list">
            <router-link :to="'/home/goodsinfo/'+item.id" class="goods-item" v-for="item in goodslist" :key="item.id" tag="div">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">{{item.sell_price}}</span>
                    <span class="old">{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>
                </p>
            </div>
        </router-link> 
         <mt-button type="primary" size="large"  @click="getMore">更多商品</mt-button>
        </div>

</template>

<script>
export default {
    data(){
        return{
            pageindex:1 ,//分页页数
            goodslist:[],
        }
    },
    created() {
         this.getGoodsList()
    },
    methods: {
        getGoodsList(){
            this.$http.get('http://www.liulongbin.top:3005/api/getgoods?pageindex='+ this.pageindex).then(result=>{
                if(result.body.status ==0){
                    this.goodslist=this.goodslist.concat(result.body.message)
                }else{

                }
            })
        },
        getMore(){
            this.pageindex ++
            this.getGoodsList()
        }
    },
}
</script>

<style lang="scss" scoped>
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;
        .goods-item{
            margin: 3px 0;
            border: 1px solid #ccc;
            box-shadow: 0 0 9px #ccc;
            width: 49%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            img{
                width: 100%
            }
            .title{
                font-size: 14px
            }
            .info{
                background-color: #eee;
                p{
                    margin: 0;
                    padding: 4px
                }
                .price{
                    .now{
                        color: red;
                        font-weight: bold;
                        font-size: 16px
                    }
                    .old{
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left: 10px
                    }
                }
                .sell{
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px
                }
            }
        }
    }
</style>
