<template>
    <div class="cmt-container">
        <h4>发表评论</h4>
        <hr>
        <textarea placeholder="最多输入120字" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" plain @click="post">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time |  dateFormat}}
                </div>
                 <div class="cmt-body">
                     {{item.content == 'undefined' ? '此评论已被删除' : item.content}}
                     </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            pageIndex:1,
            comments:[],
            msg:' '
            
        }
    },
    created(){
        this.getComments();
    },
    methods:{
        getComments(){
            this.$http.get('http://www.liulongbin.top:3005/api/getcomments/'+this.id+'?pageindex='+this.pageIndex).then(result =>{
                if(result.body.status==0){
                    //新旧数据拼接
                    this.comments = this.comments.concat(result.body.message)
                }else{
                    Toast('fail')
                }
            })
        },
        getMore(){
            this.pageIndex ++;
             this.getComments()
        },
        post(){
            if(this.msg.trim() == 0){
                 return Toast('大哥，你还没有输入内容')
            }
            this.$http.post('http://www.liulongbin.top:3005/api/postcomment/'+ this.$route.params.id,{content:this.msg.trim()}).then(result=>{
                if(result.body.status ==0){
                    var cmt = {user_name:'匿名用户',add_time:Date.now(),content:this.msg.trim()};
                    this.comments.unshift(cmt)
                    this.msg=' '
                }else{
                    Toast('fail')
                }
            })
        }
    },
    props:['id']
}
</script>

<style lang="scss" scoped>
    .cmt-container{
        h4{
            font-weight: bold;
            font-size: 16px
        }
        textarea{
            font-size: 14px;
            height: 90px;
            margin-bottom: 0;
            
        }
        .cmt-list{
            margin: 10px 0;
            .cmt-item{
                
                .cmt-title{
                    background-color: #ccc;
                    font-size: 13px;
                    line-height: 30px;
                }
                .cmt-body{
                    line-height: 35px;
                    font-size: 13px;
                    text-indent: 15px
                }
            }
        }
    }
</style>
 