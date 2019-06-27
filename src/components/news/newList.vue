<template>
    <div>
        <ul class="mui-table-view mui-table-view-chevron" v-for="item in newslistarr" :key="item.id">
				<li class="mui-table-view-cell mui-media">
					<router-link :to="'/home/newsinfo/'+item.id" class="mui-navigate-right">
						<img class="mui-media-object mui-pull-left" :src=item.img_url>
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>{{item.add_time | dateFormat}}</span>
                                <span>点击了{{item.click}}次</span>

                            </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
		return {newslistarr:[]}
	},
	created(){
		this.getNewsList()
	},
	methods:{
		getNewsList(){			//获取新闻列表
			this.$http.get('http://www.liulongbin.top:3005/api/getnewslist').then(result=>{
				if(result.body.status===0){
					this.newslistarr = result.body.message
					
				}else{
					Toast('获取失败！')
					
				}
			})
		}
	}
}
</script>


<style lang="scss" scoped>
    .mui-table-view{
        li{
            h1{
                font-size: 15px
            }
            .mui-ellipsis{
                font-size: 12px;
                color: blueviolet;
                display: flex;
                justify-content: space-between
            }
        }
    }
</style>
