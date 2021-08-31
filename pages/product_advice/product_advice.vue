<template>
	<Info/>
</template>

<script>
	// 复用组件
	import Info from '../../components/info.vue'
	export default {
		data() {
			return {
			
			};
		},
		components:{
			Info
		},
	
		onReachBottom() {
			// 触发触底事件
			uni.$emit('refresh')
		},
		onPullDownRefresh() {
			uni.$emit('pull')
		}
		
	}
</script>

<style lang="less">

</style>
