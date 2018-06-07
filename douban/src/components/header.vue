<template>
	<div class="wrap">
		<slot name="search"></slot>
		<slot name="titl"></slot>
		<slot name="left"></slot>
		<slot name="right"></slot>
	</div>
</template>

<script type="text/javascript">
	export default{
		name:"Homeheader",
		data:function(){
			return {}
		},
		methods:{},
	}
</script>

<style type="text/css">
	.wrap{height:.5rem;width: 3.75rem;margin: 0 auto;position: relative;font-size: 0;border-bottom: .01rem solid #9C9C9C;text-align: center;}
	.wrap input{height: .3rem;width: 2.6rem;border-radius: 5px;margin: .1rem .08rem .1rem .1rem;padding:0 .29rem;font-size: .14rem;}
	.wrap input::-webkit-input-placeholder{font-size: .14rem;color: #cdcdcd;}
	.wrap .homescan{position: absolute;top: .15rem;left: .15rem;width: .2rem;height: .2rem;}
	.wrap .homesearch{position: absolute;top: .15rem;right: .55rem;width: .2rem;height: .2rem;}
	.wrap .homechat{width: .3rem;height: .3rem;padding-top: .1rem;}
	.wrap p{height: .5rem;line-height: .5rem;font-size: .16rem;color: #393939;}
	.wrap .search{position: absolute;right: .7rem;top: .15rem;width: .2rem;height: .2rem;}
	.wrap .chat{position: absolute;right: .15rem;top: .15rem;width: .2rem;height: .2rem;}
</style>