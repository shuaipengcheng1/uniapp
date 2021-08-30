<template>
	<view class="content">
		<!-- 轮播图 -->
		<Swiper></Swiper>
		<!-- 分类 -->
		<Part></Part>
		<!-- 推荐列表 20长度 -->
		<Info @reach = "reach"></Info>
	</view>
</template>

<script>
	// 引入轮播图
	import Swiper from '../../components/Swiper.vue'
	// 引入分类
	import Part from '../../components/Part.vue'
	// 推荐列表
	import Info from '../../components/info.vue'
	export default {
		components: {
			Swiper
			,Part
			,Info
		},
		data() {
		return{}
		},
		onLoad (){
	
		},
		methods: {

		},
		onReachBottom() {
			// 调用子组件的消息订阅
			uni.$emit("refresh")
		
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
