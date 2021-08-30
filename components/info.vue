<template>
	<view>
		<view class="list" >
			 <view class="list_item" v-for="(item,index) in arr.goods" :key="index" @click="goto(item)">
			     <view class="list_img">
			     	<image :src="item.goods_small_logo" mode="widthFix"></image>
			     </view>
				 <view class="list_title">
				 	<text>{{item.goods_name}}</text>
				 </view>
			 </view>
		</view>
		<view class="" v-if="end">
			已经到底了~
		</view>
	</view>
</template>

<script>
	export default {
		name:"info",
		data() {
			var arr =[]
			var pagenum =1
			var maxnum = 0
			var end =false
			return {
				arr
				,pagenum
				,maxnum
				,end
			};
		},
		created() {
		
			uni.request({
				url:`https://api-hmugo-web.itheima.net/api/public/v1/goods/search?cid=5&pagesize=10&pagenum=${this.pagenum}`,
				method:"GET"
			}).then((value)=>{
			   this.maxnum=Math.floor(value[1].data.message.total/10 )//计算最大页数
				this.arr= value[1].data.message
				
			})
			// 注册一个触底事件
			uni.$on("refresh",()=>{
				console.log('re')
				// 触底事件
				// 页码加一
				this.pagenum++
				if(this.pagenum>this.maxnum){
					// 提示用户已触底
					this.end=true
					return
				}
				uni.showToast({
					title:"加载~"
				})
				uni.request({
					url:`https://api-hmugo-web.itheima.net/api/public/v1/goods/search?cid=5&pagesize=10&pagenum=${this.pagenum}`,
					method:"GET"
				}).then((value)=>{
					uni.hideToast()
					// 拼接数组
					this.arr.goods=[...this.arr.goods,...value[1].data.message.goods] 
				})
			})
			
			
			
		},
		methods:{
			goto(data){
				var id = data.goods_id;
				console.log(id)
			uni.navigateTo({
				url:`/pages/product_info/product_info?cid=${id}`,
				success(){
					console.log("成功")
				},
				fail	(e) {
					console.log(e)
				}
			})
			}
		}
		
	}
</script>

<style lang="less">
.list{
	width: 750rpx;
	
	display: flex;
flex-flow: row wrap;
justify-content: space-around;


	.list_item{
		height: 600rpx;
		width: 45%;
		margin: 10rpx;
		display: flex;
		flex-flow: column ;
		background-color: #FFFFFF;
		.list_img{
			height: 60%;
			width: 100%;
			
			image{
				width: 100%;
			}
		}
		.list_title{
			text{
	 overflow: hidden;
	  text-overflow: ellipsis;
	  display: -webkit-box;
	  -webkit-line-clamp: 2;
	  -webkit-box-orient: vertical;
			              
			}
		}
	}
}
</style>
