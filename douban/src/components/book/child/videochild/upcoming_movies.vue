<template>
	<div>
		<div class="title_1">
			<p slot="tit">影视热映</p>
			<span slot="allnum">全部（{{list.length}}）></span>
		</div>
		<div id="shoplist" class="upcoming_shoplist">
			<div v-for="(i,num) in list"  v-if="num<10">
				<div class="upcoming_date"><span>{{i.dat}}</span></div>
				<div id="upcoming_list">
					<div class="ac_video">{{con}}</div>
					<div class="v_list" v-for="(item,index) in i.movicelist">
						<Bookpublic>
							<img :src="item.img" slot = "pic" />
							<h4 slot="title">{{item.title}}</h4>
							<div class="addBtn upcoming_addBtn" slot="add" @click.prevent="add(item)">{{item.txt}}</div>
							<p slot="score" class="score upcoming_score">{{item.score}}人想看</p>
						</Bookpublic>
					</div>
				</div>
			</div>
			<div class="upcoming_move">
				<p>全部</p>
				<span>------</span>
				<p>{{list.length+12}}部</p>
			</div>
		</div>
		
	</div>
</template>

<script type="text/javascript">
	import Bookpublic from "../../../bookpublic"
	export default{
		data:function(){
			return {
				list:[
				{
					dat:"03.01",movicelist:[{id:1,score:"359",title:"翻滚吧姐妹",img:"../../../../../static/images/upcoming01.jpg",bool:false,txt:'+'}]
				},
				{
					dat:"03.02",movicelist:[{id:2,score:"110790",title:"三块广告牌",img:"../../../../../static/images/upcoming02.jpg",bool:false,txt:'+'},{id:3,score:"40000",title:"小萝莉的猴神大叔",img:"../../../../../static/images/upcoming03.jpg",bool:false,txt:'+'},{id:4,score:"12232",title:"金钱世界",img:"../../../../../static/images/xyjneg.jpg",bool:false,txt:'+'},
					{id:5,score:"9324",title:"比得兔",img:"../../../../../static/images/bdt.webp",bool:false,txt:'+'},
					{id:6,score:"8836",title:"闺蜜2",img:"../../../../../static/images/gm2.webp",bool:false,txt:'+'},
					{id:7,score:"670",title:"宇宙有浪漫同游",img:"../../../../../static/images/yzyalmty.webp",bool:false,txt:'+'},
					{id:8,score:"199",title:"落绕",img:"../../../../../static/images/ll.webp",bool:false,txt:'+'},
					{id:9,score:"88",title:"厉害了，我的国",img:"../../../../../static/images/lhlwdg.webp",bool:false,txt:'+'},]
				},
				{
					dat:"03.08",movicelist:[{id:10,score:"414",title:"飞鸟历险记",img:"../../../../../static/images/fnlxj.webp",bool:false,txt:'+'},]
				},
					
				],
				con:""
			}
		},
		methods:{
			add:function(item){
				item.bool = !item.bool;
				item.txt = (item.txt=='+')?'√':'+';
				if( item.txt=='√' ){
					this.con="√ 已添加到想看列表"
					$(".ac_video").stop().fadeIn("slow").delay (1500).fadeOut ("slow");
				}else{
					this.con="× 已从想看列表中去除"
					$(".ac_video").stop().fadeIn("slow").delay (1500).fadeOut ("slow");
				}
			}
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
	.upcoming_move>p{width: 0.4rem;height: .25rem;line-height: .25rem;}
	.upcoming_move>span{color: #ccc;}
	.upcoming_score{margin: 0;}
	.upcoming_date{font-size: .12rem;height: .2rem;color: #ababab;position: relative;top: .12rem;}
	.upcoming_date span{
		background: #fff;padding: 0 .02rem;
	}
	.upcoming_addBtn{background:rgba(0,0,0,.3)}
	#upcoming_list{display: flex;border-top: .01rem solid #dddddd;margin-right: .02rem;padding-top: .07rem;}
	.upcoming_move{margin-top: .33rem;background: #f3f3f3;height: .45rem;font-size: .14rem;padding: .4rem .35rem;text-align: center;color: #bababa;height: .65rem;}
</style>