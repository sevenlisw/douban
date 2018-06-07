<template>
	<div class="toptenreviews">
		<dl class="toptenreviews_list">
			<dt class="title_1">
				<p>豆瓣Top250</p>
			</dt>
			<dd v-for="(item,index) in list" class="toptenreviews_detial">
				<span class="toptenreviews_num">{{item.id}}</span>
				<img :src="item.img"/>
				<div class="toptenreviews_classity">
					<p>{{item.title}}</p>
					<div class="toptenreviews_score">
						<Bookpublic>
							<div slot="star" class="v_score">
								<p class="all">
									<input type="radio" value="0" v-model="item.inputdata"/><span>★</span>
									<input type="radio" value="1" v-model="item.inputdata"/><span>★</span>
									<input type="radio" value="2" v-model="item.inputdata"/><span>★</span>
									<input type="radio" value="3" v-model="item.inputdata"/><span>★</span>
									<input type="radio" value="4" v-model="item.inputdata"/><span>★</span>
									<input type="radio" value="5" v-model="item.inputdata"/><span>★</span>
								</p>
								<p slot="score" class="score">{{item.score}}</p>
							</div>
						</Bookpublic>
						<p class="toptenreviews_people">{{item.num}}人评价</p>
					</div>
				</div>
			</dd>
			<dd class="toptenreviews_all">
				全部250部
			</dd>
		</dl>
	</div>
	
</template>

<script type="text/javascript">
	import Bookpublic from "../../../bookpublic"
	export default{
		data:function(){
			return {
				list:[
					{id:1,inputdata:Math.round(9.6/2),score:"9.6",title:"肖申克的救赎",img:"../../../../../static/images/hotvideo1.jpg",num:979963},
					{id:2,inputdata:Math.round(9.5/2),score:"9.5",title:"霸王别姬",img:"../../../../../static/images/trjta2.jpg",num:711617},
					{id:3,inputdata:Math.round(9.4/2),score:"9.4",title:"这个杀手不太冷",img:"../../../../../static/images/hhxd.jpg",num:925121},
					{id:4,inputdata:Math.round(9.4/2),score:"9.4",title:"阿甘正传",img:"../../../../../static/images/xyjneg.jpg",num:786607},
				],
				con:""
			}
		},
		components:{
			Bookpublic
		}
	}
</script>

<style type="text/css">
	.toptenreviews_detial{font-size: 0;display: flex;padding: 0 .1rem;}
	.toptenreviews_detial img{width: .25rem;height: .4rem;padding: 0.05rem;}
	.toptenreviews_detial span{font-size: .12rem;}
	.toptenreviews_detial p{font-size: .14rem;}
	.toptenreviews_detial .toptenreviews_classity{padding: 0.05rem;border-bottom: .01rem solid #ddd;padding-right: 1rem;}
	.toptenreviews_detial .toptenreviews_num{padding: .03rem;}
	.toptenreviews_detial .toptenreviews_people{font-size: .12rem;color: #cecece;}
	.toptenreviews_detial .toptenreviews_score{display: flex;}
	.toptenreviews_detial .toptenreviews_score .v_score{width: .7rem;margin: 0;}
	.toptenreviews_detial .toptenreviews_score .score{margin: 0;}
	.toptenreviews_all{font-size: .12rem;color: #ccc;height: .35rem;line-height: .35rem;text-align: center;}
</style>