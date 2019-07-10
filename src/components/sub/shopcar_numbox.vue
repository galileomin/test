<template>
    <div class="mui-numbox" data-numbox-min='1' style="height:25px">
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" :value="initcount" 
                    @change="countChange" ref="numbox" readonly>
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
import mui from "../../lib/Mui/js/mui.min.js"
export default {
    mounted(){
        mui(".mui-numbox").numbox();
    },
    methods: {
        //每当数量改变，更新新的数量
        countChange(){
            this.$store.commit("updateGoodsinfo",{id:this.goodsid,count:this.$refs.numbox.value})
    }},
    props:['initcount','goodsid']

}
</script>

<style lang="scss" scoped>

</style>
