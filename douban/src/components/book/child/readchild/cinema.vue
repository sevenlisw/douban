<template>
	<div class="cinema">
		<div class="title_1">
			<p slot="tit">新书速递</p>
			<span slot="allnum">全部（{{list.length+27}}）></span>
		</div>
		<div id="shoplist">
			<div class="ac_video">{{con}}</div>
			<div v-for="(item,index) in list" v-if="index<10" class="v_list">
				<Bookpublic>
					<img :src="item.img" slot = "pic" />
					<h4 slot="title">{{item.title}}</h4>
					<div class="addBtn" slot="add" @click.prevent="add(item,index)">{{item.txt}}</div>
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
			</div>
			<div class="more">
				<p>全部</p>
				<span>------</span>
				<p>{{list.length+27}}本</p>
			</div>
		</div>
		<img src="../../../../../static/images/ad_01.jpg" class="recommmend_pic"/>
	</div>
	
</template>

<script type="text/javascript">
	import Bookpublic from "../../../bookpublic"
	export default{
		data:function(){
			return {
				list:[
					{id:1,inputdata:Math.round(5.4/2),score:"5.4",title:"抑郁的美男子",img:"../../../../../static/images/read09.jpg",bool:false,txt:'+'},
					{id:2,inputdata:Math.round(8.0/2),score:"8.0",title:"投资中不简单的事",img:"../../../../../static/images/read10.jpg",bool:false,txt:'+'},
					{id:3,inputdata:Math.round(8.0/2),score:"8.0",title:"大河恋",img:"../../../../../static/images/read11.jpg",bool:false,txt:'+'},
					{id:4,inputdata:Math.round(8.0/2),score:"8.0",title:"大军师司马懿之军师联盟",img:"../../../../../static/images/read12.jpg",bool:false,txt:'+'},
					{id:5,inputdata:Math.round(6.7/2),score:"6.7",title:"狗女婿上门",img:"../../../../../static/images/read13.jpg",bool:false,txt:'+'},
					{id:6,inputdata:Math.round(4.8/2),score:"4.8",title:"神枪手迪克",img:"../../../../../static/images/read14.jpg",bool:false,txt:'+'},
					{id:7,inputdata:Math.round(8.5/2),score:"8.5",title:"柏拉图和鸭嘴兽一起去酒吧",img:"../../../../../static/images/read15.jpg",bool:false,txt:'+'},
					{id:8,inputdata:Math.round(7.9/2),score:"7.9",title:"从六艺到十三经",img:"../../../../../static/images/read16.jpg",bool:false,txt:'+'},
					{id:9,inputdata:Math.round(8.6/2),score:"8.6",title:"穿过欲望之城",img:"../../../../../static/images/read17.jpg",bool:false,txt:'+'},
					{id:10,inputdata:Math.round(6.3/2),score:"6.3",title:"背景的隐秘角落",img:"../../../../../static/images/read18.jpg",bool:false,txt:'+'},
					{id:11,inputdata:Math.round(7.4/2),score:"7.4",title:"公牛历险记",img:"../../../../../static/images/read19.jpg",bool:false,txt:'+'},
					{id:12,inputdata:Math.round(7.4/2),score:"7.4",title:"公牛历险记",img:"../../../../../static/images/read20.jpg",bool:false,txt:'+'},
					{id:13,inputdata:Math.round(7.4/2),score:"7.4",title:"公牛历险记",img:"../../../../../static/images/read21.jpg",bool:false,txt:'+'},
				],
				con:""
			}
		},
		methods:{
			add:function(item,n){
				item.bool = !item.bool;
				item.txt = (item.txt=='+')?'√':'+';
				if( item.txt=='√' ){
					this.con="√ 已添加到想看列表"
					$(".ac_video").stop().fadeIn("slow").delay (1500).fadeOut ("slow");
					$(".addBtn").eq(n).css({
						"background":"rgba(251,125,1,.3)",
						"font-size":".15rem"
					})
				}else{
					this.con="× 已从想看列表中去除"
					$(".ac_video").stop().fadeIn("slow").delay (1500).fadeOut ("slow");
					$(".addBtn").eq(n).css({
						"background":"rgba(0,0,0,.3)",
						"font-size":".2rem"
					})
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
	.more{background: #f3f3f3;height: .45rem;margin: .05rem;font-size: .14rem;padding: .4rem .35rem;text-align: center;color: #bababa;height: .65rem;}
	.more>p{width: 0.4rem;height: .25rem;line-height: .25rem;}
	.more>span{color: #ccc;}
	.recommmend_pic{margin: .1rem;width: 3.55rem;}
	.cinema{font-size: 0;}
</style>