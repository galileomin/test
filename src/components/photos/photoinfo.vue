<template>
    <div class="photoinfo-container">
        <h3>{{imageinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{imageinfo.add_time | dateFormat}}</span>
            <span>点击：{{imageinfo.click}}</span>
        </p>
        <hr>
        <!-- 缩略图 -->
        <div class="tumbs">
            <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src">
        </div>

        <!-- 图片内容 -->
        <div class="content" v-html="imageinfo.content"></div>
        <!-- 评论区 -->
        <comment :id="this.id"></comment>
    </div>
</template>

<script>
import comment from '../sub/comment.vue'
export default {
    data(){
        return{
            id:this.$route.params.id,
            imageinfo:{},
            //缩略图数组
            list:[]
        }
    },
    created(){
        this.getPhotoInfo()
        this.getList()
    },
    methods: {
        getPhotoInfo(){
            this.$http.get('http://www.liulongbin.top:3005/api/getimageInfo/' + this.id).then(result=>{
                if(result.body.status==0){
                    this.imageinfo=result.body.message[0]
                }
            })
        },
        getList(){
            this.$http.get('http://www.liulongbin.top:3005/api/getthumimages/'+ this.id).then(result=>{
                if(result.body.status==0){
                    result.body.message.forEach(element => {
                        element.w=600;
                        element.h=600
                    });
                    this.list = result.body.message
                }
            })
        },
    },
    components:{
        'comment':comment
    }
}
</script>

<style lang="scss">
.photoinfo-container{
    padding: 3px;
    h3{
        color: purple;
        font-size: 15px;
        text-align: center;
        font-weight: bolder;
        margin: 14px 0;


    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 13px
    }
    .content{
        font-size: 13px;
        line-height: 30px
    }
    .tumbs{
        img{
            margin: 7px;
            box-shadow: 0 0 8px #999;
            border-radius: 20px;
            
        }
    }
}
</style>
