<template>
    <div>
        <!-- 滑动条区域 -->
        <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" data-wid="tab-top-subpage-1.html" v-for="item in cate" :key="item.id" @click="getphotoListByCateID(item.id)">
							{{item.title}}
                            
						</a>                      
					</div>
				</div>

			</div>
        <!-- 图片列表 -->
        <ul class="photo-list">
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id " tag="li">
             <img v-lazy="item.img_url">
             <div class="info">
                 <h1 class="infotitle">{{item.title}}</h1>
                 <div class="infobody">{{item.zhaiyao}}</div>
             </div>
                </router-link>
        </ul>
    </div>
</template>

<script>
// 导入mui的js文件
import mui from '../../lib/Mui/js/mui.min.js'
export default {
    data(){
        return{
            cate:[],    //分类列表
            list:[]     //图片列表
        }
    },
    created() {
        this.getAllCatefory()
        this.getphotoListByCateID(0)
    },
    methods: {
         getAllCatefory(){
             this.$http.get('http://www.liulongbin.top:3005/api/getimgcategory').then(result=>{
                 if(result.body.status==0){
                     //拼接出全部选项
                     result.body.message.unshift({title:'全部',id:0});
                     this.cate=result.body.message
                 }
             })
         },
         getphotoListByCateID(cateId){
             //根据分类id获取图片列表
             this.$http.get('http://www.liulongbin.top:3005/api/getimages/' + cateId).then(result=>{
                 if(result.body.status==0){
                     this.list=result.body.message
                     
                 }else{

                 }
             })
         }
    },
   
    mounted() {
        //初始化滑动控件
        mui('.mui-scroll-wrapper').scroll({
             deceleration:0.0005   //系数越大。滚动速度越慢
})
    },

}   
</script>

<style lang="scss">
    * {
        touch-action: pan-y    }

 .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{
    color: #000000
}
.photo-list{
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
     img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
    img{
        width: 100%;
        border-radius: 20px
    }
     li{ 
        position: relative;
         text-align: center;
         margin-bottom: 10px;
         box-shadow: 0 0 10PX;
         border-radius: 20px;
         .info{
             background-color: rgba(0, 0, 0, 0.5);
             bottom: 0;
             position: absolute;
             color: white;
             text-align: left;
             max-height: 84px;
             border-radius: 20px;
             overflow: hidden;
             .infotitle{
                 font-size: 14px;
                 font-weight: bold
                 
             }
             .infobody{
                font-size: 13px
             }
         }

} 
}  

</style>
