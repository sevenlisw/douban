<template>
	<div class="cinema">
		<div class="title_1">
			<p slot="tit">最受非关注的虚构类图书</p>
			<span slot="allnum">全部（{{list.length}}）></span>
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
				<p>{{list.length}}部</p>
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
					{id:1,inputdata:Math.round(5.4/2),score:"5.4",title:"捉妖记2",img:"../../../../../static/images/hotvideo1.jpg",bool:false,txt:'+'},
					{id:2,inputdata:Math.round(7.5/2),score:"7.5",title:"唐人街探案2",img:"../../../../../static/images/trjta2.jpg",bool:false,txt:'+'},
					{id:3,inputdata:Math.round(8.5/2),score:"8.5",title:"红海行动",img:"../../../../../static/images/hhxd.jpg",bool:false,txt:'+'},
					{id:4,inputdata:Math.round(4.8/2),score:"4.8",title:"西游记女儿国",img:"../../../../../static/images/xyjneg.jpg",bool:false,txt:'+'},
					{id:5,inputdata:Math.round(6.7/2),score:"6.7",title:"熊出没·变形记",img:"../../../../../static/images/xcmbxj.jpg",bool:false,txt:'+'},
					{id:6,inputdata:Math.round(4.8/2),score:"4.8",title:"祖宗十九代",img:"../../../../../static/images/zzsjd.jpg",bool:false,txt:'+'},
					{id:7,inputdata:Math.round(6.9/2),score:"6.9",title:"小马宝莉大电影",img:"../../../../../static/images/xmlyddy.jpg",bool:false,txt:'+'},
					{id:8,inputdata:Math.round(7.9/2),score:"7.9",title:"马戏之王",img:"../../../../../static/images/mxzw.jpg",bool:false,txt:'+'},
					{id:9,inputdata:Math.round(8.0/2),score:"8.0",title:"神秘巨星",img:"../../../../../static/images/smjx.jpg",bool:false,txt:'+'},
					{id:10,inputdata:Math.round(7.4/2),score:"7.4",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",bool:false,txt:'+'},
					{id:11,inputdata:Math.round(7.4/2),score:"7.4",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",bool:false,txt:'+'},
					{id:12,inputdata:Math.round(7.4/2),score:"7.4",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",bool:false,txt:'+'},
					{id:13,inputdata:Math.round(7.4/2),score:"7.4",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",bool:false,txt:'+'},
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