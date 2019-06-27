<template>
    <div class="app-header">
        <!-- 顶部header -->
        <mt-header fixed title="商城项目"></mt-header>

        <!-- router-view -->
	<transition>
	<router-view></router-view>
	</transition>
	

        <!-- 导航 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Plus">
				<span class="mui-icon mui-icon-extra mui-icon-extra-peoples"></span>
				<span class="mui-tab-label">PLUS</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopCart">
				<span class=" mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">3</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
export default {
    
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
.v-enter-active,.v-leave-active{
	transition: all, 0.4s ease
}
</style>
