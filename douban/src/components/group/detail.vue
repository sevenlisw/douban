<template>
	<div class="detail">
		<div class="icon"><span @click="back"><</span>电影</div>
		<video src="./video/video.mp4" controls="controls" autoplay="autoplay"></video>
	</div>
</template>
<script type="text/javascript">
	export default{
		data:function(){
			return {}
		},
		methods:{
			back:function(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style type="text/css">
	video{width: 3.75rem;}
	.icon{height: .3rem;font-size: .14rem;line-height: .3rem;text-align: center;padding:0 .1rem}
	.icon span{float: left;font-size: .2rem;}
</style>