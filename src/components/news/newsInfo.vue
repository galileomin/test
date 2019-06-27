<template>
    <div class="newsinfo">
        <h1 class="title">{{newsinfo.title}}</h1>
        <p class="subtitle">
            <span>发表时间:{{newsinfo.add_time|dateFormat}}</span>
            <span>点击{{newsinfo.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsinfo.content">
        </div>
    </div>
</template>


<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            id: this.$route.params.id,
            newsinfo:{},
        }
    },
    created(){
        this.getNewsInfo();   
	},
    methods: {
        getNewsInfo(){
            this.$http.get('http://www.liulongbin.top:3005/api/getnew/' + this.id).then((result) => {
                if(result.body.status==0){
                    this.newsinfo=result.body.message[0]
                    
                }else{
                    Toast('获取失败！')
                }
            })
        },
    },
}
</script>


<style lang="scss" >
    .newsinfo{
        padding: 0 4px;
        .title{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            color: blueviolet
            
        }
    }
</style>
