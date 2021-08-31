<template>
	<view>
		<!-- 分类 -->
		<!--  -->
		<view class="part_box">
			<view class="part_items" v-for="(item,index) in msg" :key="index" @click="goto(index)">
				<image :src="item.image_src" mode="widthFix"> </image>
			</view>
		</view>
		<hr />
		<view class="title">
			<text>精选商品</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "Part",
		data() {
			var msg = []
			return {
				msg
			};
		},
		mounted() {
			// 请求
			uni.request({
				url: "https://api-hmugo-web.itheima.net/api/public/v1/home/catitems",
				method: "GET"
			}).then((value) => {
				this.msg = value[1].data.message


			})
		},
		methods: {
			goto(index) {
				// 前往商品精选
				switch (index) {
					case 0:
						uni.navigateTo({
							url: '/pages/product_advice/product_advice',

						});
						break;
					case 1:
						uni.navigateTo({
							url: '/pages/about_us/about_us',

						});
						break;
						case 2 :
						uni.navigateTo({
							url: '/pages/goods_part/goods_part',
						
						});
						break;
				}

			},

		}
	}
</script>

<style lang="less">
	.part_box {
		width: 750rpx;
		height: 200upx;
		// margin-bottom: 90rpx;
		display: flex;
		justify-content: space-around;
		background-color: #FFFFFF;

		.part_items {
			width: 20%;
			height: 200upx;

			image {
				width: 100%;
				height: 200upx;
			}
		}
	}

	.title {
		width: 750rpx;
		height: 100rpx;
		display: flex;
		background-color: #FFFFFF;
		border-radius: 15px;
		justify-content: center;
		align-items: center;
		color: red;
		font-size: 30px;
	}
</style>
