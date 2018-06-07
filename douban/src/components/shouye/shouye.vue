<template>
	<div class="homewrap">
		<Homeheader class="head">
			<img class="homescan" src="./img/ic_scan_gray.png" slot='left'/>
			<img class="homesearch" src="./img/ic_search.png" slot='right' />
			<input type="text" placeholder="影视 图书 唱片 小组等" slot='search'/>
			<img src="./img/ic_chat_white.png" class="homechat" slot='titl'/>
		</Homeheader>
		<Banner></Banner>
		<Hot></Hot>
	</div>
</template>

<script type="text/javascript">
	import Homeheader from '../header';
	import Banner from './banner';
	import Hot from './hot';
	export default{
		data:function(){
			return {}
		},
		methods:{},
		components:{
			Homeheader,
			Banner,
			Hot
		}
	}
</script>

<style>
	.head{background: #42c055;border:none;display: flex;}
</style>