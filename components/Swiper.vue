<template>
	<view>
		<!-- 轮播图组件 -->
	<swiper class="swiper" :circular="true" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" >
		<swiper-item v-for=" (item,index) in imgArr" :key="item.goods_id">
			<view class="swiper-item">
				<image :src="item.image_src" :mode="item.open_type" mode="scaleToFill" class="swiper_image">
			</view>
		</swiper-item>
	
	</swiper>
	</view>
</template>

<script>
	import Request from "../hook/axios.js"
	export default {

		name: "Swiper",

		data() {
			var imgArr = []
			return {
				imgArr
			}
		},
		created() {
			// 发送请求 获取图片数据
			var data
			console.log(this.imgArr)
			Request({
				url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata",
				method: "GET"
			}).then((v) => {
			
				data = v[1].data.message
				console.log(data)
				this.imgArr = data
			})
		
		}

	}
</script>

<style lang="less">
.swiper{
	width: 750rpx;
height: 300upx;

	.swiper-item{
		display: block;
		line-height: 300upx;
		text-align: center;
	}
	image{
		width: 100%;
		 height: 300upx;
	
	}
}

</style>
