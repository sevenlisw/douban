<template>
	<div class="bookshop">
		<div class="title_1">
			<p slot="tit">豆瓣书店</p>
			<span slot="allnum">全部{{list.length}} ></span>
		</div>
		<div class="bookshop_list">
			<img src="../../../../../static/images/hotvideo1.jpg"/>
			<div class="bookshop_title">
				<div class="bookshop_cont">
					<h5>碳</h5>
				</div>
				<p>树上春树七年磨一剑</p>
			</div>
		</div>
		<div id="shoplist">
			<div class="v_list" v-for="item in list">
				<Bookpublic>
					<img :src="item.img" slot = "pic" />
					<h4 slot="title">{{item.title}}</h4>
					<div slot="star" class="v_score">
						<p slot="score" class="score">￥{{item.score}}</p>
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
					{id:1,inputdata:Math.round(5.4/2),score:"134",title:"石黑一雄作品系列套装",img:"../../../../../static/images/read07.png",bool:false,txt:'+'},
					{id:2,inputdata:Math.round(7.5/2),score:"259",title:"唐人街探案2",img:"../../../../../static/images/read08.jpg",bool:false,txt:'+'},
					{id:3,inputdata:Math.round(8.5/2),score:"174",title:"红海行动",img:"../../../../../static/images/read08.jpg",bool:false,txt:'+'},
					{id:4,inputdata:Math.round(4.8/2),score:"269",title:"西游记女儿国",img:"../../../../../static/images/xyjneg.jpg",bool:false,txt:'+'},
					{id:5,inputdata:Math.round(6.7/2),score:"398",title:"熊出没·变形记",img:"../../../../../static/images/xcmbxj.jpg",bool:false,txt:'+'},
					{id:6,inputdata:Math.round(4.8/2),score:"45",title:"祖宗十九代",img:"../../../../../static/images/zzsjd.jpg",bool:false,txt:'+'},
					{id:7,inputdata:Math.round(6.9/2),score:"131.2",title:"小马宝莉大电影",img:"../../../../../static/images/xmlyddy.jpg",bool:false,txt:'+'},
					{id:8,inputdata:Math.round(7.9/2),score:"38",title:"马戏之王",img:"../../../../../static/images/mxzw.jpg",bool:false,txt:'+'},
					{id:9,inputdata:Math.round(8.0/2),score:"132",title:"神秘巨星",img:"../../../../../static/images/smjx.jpg",bool:false,txt:'+'},
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
	.bookshop_list{display: flex;font-size: 0;padding:0 0.1rem .1rem .1rem;}
	.bookshop_list img{width: .9rem;height: 1.2rem;}
	.bookshop_title{padding-left: .1rem;}
	.bookshop_title p{font-size: .14rem;color: #d0d0d0;}
	.bookshop_title .bookshop_cont{font-size: .26rem;display: flex;justify-content: space-between;width: 2.4rem;align-items: flex-end;}
</style>