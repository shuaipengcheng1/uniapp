<template>
	<view>
		<view @click="get()" class="">
			<h1>关于我们</h1>
		</view>
		<view class="">
			<map :latitude="y" :longitude="x" :markers="makers" show-compass enable-traffic show-location></map>
		</view>
		<view class="">
			地址:成都市
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			var x =104.08329
			var y =30.65618
			var makers = [{
				latitude:y,
				longitude:x,
				id:1,
				iconPath:'/static/my.png',
				title:"位置"
			}]
			return {
x,y,makers
			}
		},
		methods: {


		},
		onLoad() {
			uni.getLocation({
				type: 'wgs84',
				success: function(res) {
					console.log('当前位置的经度：' + res.longitude);
					console.log('当前位置的纬度：' + res.latitude);
					console.log(res)
				}
			});
		}
	}
</script>

<style>
map{
	width: 750rpx;
	height: 750rpx;
}
</style>
