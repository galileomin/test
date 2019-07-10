<template>
    <div class="app-header">
        <!-- 顶部header -->
 
<mt-header  fixed title="商城项目">
  <router-link to="" slot="left">
    <mt-button icon="back" @click.native="back()" v-show="flag"></mt-button>
  </router-link>
</mt-header>
        <!-- router-view -->
	<transition>
	<router-view></router-view>
	</transition>
	

        <!-- 导航 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-g " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-g" to="/Plus">
				<span class="mui-icon mui-icon-extra mui-icon-extra-peoples"></span>
				<span class="mui-tab-label">PLUS</span>
			</router-link>
			<router-link class="mui-tab-item-g" to="/shopCart">
				<span class=" mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{$store.getters.sumOfCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-g" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data() {
		return {
			flag:false
		}
	},
	methods: {
		back(){
				this.$router.back(-1)
		}

	},
	watch:{
		'$route.path':function(newval){
			if(newval=='/home'){
				this.flag=false
			}else{
				this.flag=true
			}
			
		}
	},
	created() {
		this.flag=this.$route.path=='/home' ? false:true

		
	},
}
</script>

<style scoped>
 .app-header{
	 padding-top: 40px;
	 overflow: hidden;
	 padding-bottom: 50px
	}
.v-enter{
	opacity: 0;
	transform: translateX(100%);
	position: absolute

}


.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute
}
.v-enter-active, .v-leave-active{
	transition: all, 0.4s ease
}
/* //改类名解决tabbar冲突问题*/ 
.mui-bar-tab .mui-tab-item-g.mui-active{
	color: #007aff
}
.mui-bar-tab .mui-tab-item-g{
	display: table-cell;
	overflow: hidden;
	width: 1%;
	height: 50px;
	text-align: center;
	vertical-align: middle;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: #929292
}
.mui-bar-tab .mui-tab-item-g .mui-icon{
	top: 3px;
	width: 24px;
	height: 24px;
	padding-top: 0;
	padding-bottom: 0
}
.mui-bar-tab .mui-tab-item-g .mui-icon~.mui-tab-label{
	font-size: 11px;
	display: block;
	overflow: hidden;
	text-overflow: ellipsis
}
</style>
