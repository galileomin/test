<template>
    <div>
        <mt-swipe :auto="3000">
        <mt-swipe-item v-for="item in LbList" :key="item.path"> 
            <img :src="item.path" alt="">
        </mt-swipe-item>  
</mt-swipe>
<ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                       <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                       <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                       <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                       <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>

		        </ul> 

    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            LbList:[
                {name:'1',path:'../../images/1.jpg'},
                {name:'2',path:'../../images/2.jpg'},
                {name:'3',path:'../../images/3.jpg'},
                {name:'4',path:'../../images/4.jpg'},
            ]  //保存轮播图的数组
        }
    },
    methods:{
        
    }
}
</script>

<style lang='scss' scoped>
    .mint-swipe{
        height: 200px;
        
        .mint-swipe-item{
            &:nth-child(1){background-color: red;};
            &:nth-child(2){background-color: blue;};
            &:nth-child(3){background-color: pink;};

            img{
                width: 100%;
                height: 100%;
            }
            
        }
    }
.mui-grid-view.mui-grid-9{
    background-color: white;
    .mui-table-view-cell{
        border-right: 0;
        border-bottom: 0px
    }
    img{
        width: 60px;
        height: 60px;
    }
    .mui-media-body{
        font-size: 13px
    }
}
</style>
