<template>
	<div class="tabbar">
		<Tabbar title="首页" mark="shouye" @transform="getValue" :sel="select">
			<img src="./images/ic_tab_home_active.png" slot="img1"/>
			<img src="./images/ic_tab_home_normal.png" slot="img"/>
		</Tabbar>
		<Tabbar title="书影音" mark="book" @transform="getValue" :sel="select">
			<img src="./images/ic_tab_subject_normal.png" slot="img"/>
			<img src="./images/ic_tab_subject_active.png" slot="img1"/>
		</Tabbar>
		<Tabbar title="广播"  mark="broadcast" @transform="getValue" :sel="select">
			<img src="./images/ic_tab_status_normal.png" slot="img"/>
			<img src="./images/ic_tab_status_active.png" slot="img1"/>
		</Tabbar>
		<Tabbar title="小组"  mark="group" @transform="getValue" :sel="select">
			<img src="./images/ic_tab_group_normal.png" slot="img"/>
			<img src="./images/ic_tab_group_active.png" slot="img1"/>
		</Tabbar>
		<Tabbar title="我的"  mark="personal" @transform="getValue" :sel="select">
			<img src="./images/ic_tab_profile_female_normal.png" slot="img"/>
			<img src="./images/ic_tab_profile_female_active.png" slot="img1"/>
		</Tabbar>
	</div>
</template>
<script type="text/javascript">
	import Tabbar from "./tabbarChild"
	export default{
		data:function(){
			return {select:"shouye"}
		},
		methods:{
			getValue:function(n){
				this.select = n
			}
		},
		components:{
			Tabbar
		}
	}
</script>

<style type="text/css">
	.tabbar{height: .64rem;font-size: 0;text-align: center;border-top: 1px solid #b5b5b5;position: fixed;bottom: 0;width: 100%;float: left;background: rgba(255,255,255,.9);z-index: 1;}
	.tabbar div{width: 20%;float: left;}
	.tabbar p{font-size: .14rem;height: .2rem;line-height: .2rem;}
	.tabbar img{width: .4rem;height: .4rem;}
	.ac{color: #42bf55;font-weight: bold;}
</style>