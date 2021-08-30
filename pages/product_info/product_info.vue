<template>
	<view>
		<view class="img_box">
			<image :src="data.goods_big_logo" mode="widthFix"></image>
		</view>
		<view class="img_text">
			{{data.goods_name}}
		</view>
		<view class="buttom">
			<view class="left">
				<!-- 售价 -->
			<icon type="#DD524D" class="iconfont icon-3shoujia"></icon>	{{data.goods_price}}
			</view>
			<view class="rigth">
				<!-- 购物车 -->
				<!-- 购买 -->
				     <div class="caft">购物车</div>
				      <div class="buy">购买</div>
			</view>
		</view>
		<rich-text :nodes="rich_text"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			var data = {}
			var rich_text =""
			return {
				data,
				rich_text
			}
		},
		methods: {
			
		},
		onLoad(data) {
			// 获取商品的id
		 var cid=	data.cid
		 uni.request({
		 	url:`https://api-hmugo-web.itheima.net/api/public/v1/goods/detail`,
			data:{
				goods_id:cid
			},
			method:"GET"
		 }).then((v)=>{
			 console.log(v[1].data.message)
			 this.data = v[1].data.message
			 this.rich_text = this.data.goods_introduce
		 })
		 
		}
	}
</script>

<style lang="less">
.img_box{
	width: 750rpx;
	image{
		width: 100%;
	}
}
.img_text{
	background-color: #FFFFFF;
	
	font-size: 20px;
	overflow: hidden;
	 text-overflow: ellipsis;
	 display: -webkit-box;
	 -webkit-line-clamp: 2;
	 -webkit-box-orient: vertical;
	 margin-bottom: 20px;
}
.buttom{
	width: 750rpx;
	height: 120upx;
	position: fixed;
	display: flex;
	bottom: 0rpx;
	background-color: #FFFFFF;
	z-index: 100;
	.left{
		width: 40%;
			color: red;
			font-size: 30px;
			font-weight: bold;
			display: flex;
			justify-content: center;
			align-items: center;
		
	}

	 .rigth {
	    width: 60%;
	    display: flex;
	    align-items: center;
	    justify-content: space-around;
	    .caft {
	      width: 45%;
	      height: 80%;
	      border-radius: 15px;
	      font-size: 20px;
	      font-weight: bold;
	      display: flex;
	      justify-content: center;
	      align-items: center;
	      background-color: yellow;
	    }
	    .buy {
	      font-size: 20px;
	      font-weight: bold;
	      border-radius: 15px;
	      width: 45%;
	      height: 80%;
	      display: flex;
	      justify-content: center;
	      align-items: center;
	      background-color: red;
	    }
	  }
}
</style>
