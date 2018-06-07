<template>
	<div class="groupwrap">
		<Homeheader>
			<p slot="titl">小组</p>
			<img src="./img/ic_status_search_user.png" class="search" slot="left"/>
			<img src="./img/ic_create_group_chat_blue.png" class="chat" slot="right"/>
		</Homeheader>
		<div class="banner">
			<p>418832个小组等你来玩</br><span>立即选择加入吧！</span></p>
			<div>根据你的兴趣推荐</div>
		</div>
		<grouplist></grouplist>
	</div>
	
</template>
<script type="text/javascript">
	import Homeheader from "../header"
	import Grouplist from "./grouplist"
	export default{
		name:"Personal",
		
		components:{
			Homeheader,
			Grouplist
		}
	}
</script>
<style type="text/css">
	.banner{background: url(img/ic_group_banner.png) no-repeat;text-align: center;width: 3.75rem;}
	.banner p{font-size: .25rem;padding-top: .5rem;}
	.banner span{font-size: .2rem;color: #929292;}
	.banner div{font-size: .12rem;float: left;color: #95969a;padding: .18rem 0 0 .2rem;}
	
	
</style>