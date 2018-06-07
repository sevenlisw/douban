<template>
	<div class="public">
		<slot name="pic"></slot>
		<slot name="add"></slot>
		<slot name="title"></slot>
		<slot name="star"></slot>
		<slot name="score"></slot>
		<slot name="tit"></slot>
		<slot name="allnum"></slot>
	</div>
</template>

<script type="text/javascript">
	export default{
		data:{
			
		},
		methods:{
			
		}
	}
</script>
<style type="text/css">
	.public{width: 1rem;font-size: 0;}
	#shoplist{display: flex;overflow-x: auto;box-sizing: border-box;width: 3.75rem;}
	#shoplist::-webkit-scrollbar{display: none;}
	#shoplist .v_list{margin: .05rem;width: 1rem;position: relative;}
	#shoplist{overflow-x: auto;}
	#shoplist::-webkit-scrollbar{display: none;}
	.public img{width: 1rem;height: 1.45rem;}
	.all{width: .2rem;display: flex;}
	.all>input{opacity: 0;position: absolute;margin: 0;}
	.all>input:nth-of-type(1),.all>span:nth-of-type(1){display: none;}
	.all>span{font-size: .12rem;color: gold;-webkit-transition: color.2s;transition: color.2s;width: .2rem;}
	.all>input:checked~span{color: #ccc;}
	.all>input:checked+span{color: gold;}
	h4{font-size: .14rem;font-weight: bold;height:.25rem ;line-height: .25rem;color: #4d4d4d;overflow: hidden;}
	.score{font-size: .1rem;color: #b6b6b6;margin-right: .3rem;}
	.v_score{display: flex;justify-content:space-between;}
	.addBtn{font-size: .18rem;width: .25rem;height: .25rem;line-height: .25rem;background: rgba(0,0,0,.3);text-align: center;color: #fff;position: absolute;left: 0;top: 0;cursor: pointer;}
	.ac_video{position: fixed;left:1rem;top: .2rem;background: rgba(69,220,95,.7);width: 1.75rem;height: .3rem;border-radius: .2rem;border: .01rem solid #fff;color: #fff;font-size: .14rem;line-height: .3rem;text-align: center;display: none;z-index:2;}
	.title_1{font-size: .16rem;display: flex;justify-content: space-between;padding: 0 .1rem;height: .3rem;line-height: .3rem;margin-top: .2rem;}
	.title_1 span{color: #c6c6c6;font-size: .12rem;}
</style>