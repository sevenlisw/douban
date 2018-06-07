<template>
	<div class="hotread">
		<div class="title_1">
			<p slot="tit">图书咨询</p>
			<span slot="allnum">更多 ></span>
		</div>
		<div class="hotread_list">
			<div class="hotread_con">
				<h4>柏拉图和鸭嘴兽是天生一对？</h4>
				<p>看到看到看到看到看到看到看到看到看到看到看到看到看到看到看到看到看到看到看到看到看到看到看到看到看到看到看到</p>
				<span>—</span>
				<h6>作者：未读</h6>
			</div>
			<div class="hotread_pic">
				<img src="../../../../../static/images/read14.jpg"/>
			</div>
		</div>
		
	</div>
	
</template>

<script type="text/javascript">
	import Bookpublic from "../../../bookpublic"
	export default{
		data:function(){
			return {
			}
		},
		methods:{
			
		},
		watch:{
			inputdata:function(value){
				console.log(value)
			}
		},
		components:{
			Bookpublic
		}
	}
</script>

<style type="text/css">
	.hotvideo_shoplist{display: flex;flex-direction: column;}
	.hotvideo_list{display: flex;}
	.more{background: #f3f3f3;height: .45rem;margin: .05rem;font-size: .14rem;padding: .4rem .35rem;text-align: center;color: #bababa;height: .65rem;}
	.more>p{width: 0.4rem;height: .25rem;line-height: .25rem;}
	.more>span{color: #ccc;}
	.recommmend_pic{margin: .1rem;width: 3.55rem;}
	.hotread_list{display: flex;font-size: 0;justify-content: space-between;padding: .1rem;}
	.hotread_list .hotread_con{padding-right:.1rem}
	.hotread_list .hotread_con p{font-size: .12rem ;color: #9c9c9c;}
	.hotread_list .hotread_pic{width: 1rem;}
	.hotread_list .hotread_pic img{width: 1rem;height: 1.5rem;}
	.hotread_list .hotread_con span{font-size: .12rem ;color: #9b9b9b}
	.hotread_list .hotread_con h6{font-size: .12rem ;color: #9b9b9b}
</style>