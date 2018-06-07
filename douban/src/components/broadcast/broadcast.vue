<template>
	<div class="broadcast">
		<Homeheader>
			<p slot="titl">广播</p>
			<img src="./img/ic_group_search.png" class="search" slot="left"/>
			<img src="./img/ic_create_group_chat_blue.png" class="chat" slot="right"/>
		</Homeheader>
		<Issue></Issue>
	</div>
	
</template>
<script type="text/javascript">
	import Homeheader from "../header"
	import Issue from "./child/issue"
	export default{
		name:"Broadcast",
		data:function(){
			return {}
		},
		components:{
			Homeheader,
			Issue
		}
	}
</script>
<style type="text/css">
	
</style>