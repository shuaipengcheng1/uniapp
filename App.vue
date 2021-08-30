<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	body,html{
		background-color: #e5e5e5;
	}
	@font-face {
	  font-family: "iconfont"; /* Project id 2600132 */
	  src: url('//at.alicdn.com/t/font_2600132_slrhvixpi8.woff2?t=1629202859961') format('woff2'),
	       url('//at.alicdn.com/t/font_2600132_slrhvixpi8.woff?t=1629202859961') format('woff'),
	       url('//at.alicdn.com/t/font_2600132_slrhvixpi8.ttf?t=1629202859961') format('truetype');
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.icon-shouye:before {
	  content: "\e655";
	}
	
	.icon-3shoujia:before {
	  content: "\e861";
	}
	
	.icon-kefu:before {
	  content: "\e605";
	}
	
	.icon-fukuantongzhi:before {
	  content: "\e60c";
	}
	
	.icon-shouhuodizhi:before {
	  content: "\e71e";
	}
	
	.icon-fenxiang:before {
	  content: "\e654";
	}
	
	.icon-tuikuan:before {
	  content: "\e647";
	}
	
	.icon-dingdan:before {
	  content: "\e602";
	}
	
	.icon-shoucang:before {
	  content: "\e62a";
	}
	
	.icon-shoucang1:before {
	  content: "\e6ae";
	}
	
	.icon-gouwuchekong:before {
	  content: "\e600";
	}

</style>
