<template>
	<div class="popdomestic">
		<img src="../../../../../static/images/banner_read_02.jpg"/>
		<ul class="recommmend_movie">
			<li class="recommmend_text">
				<img src="../../../../../static/images/icon_03.png"/>
				<div>
					<p class="blod">找电影</p>
					<p class="normal">韩国/大陆/冷门电影</p>
				</div>
			</li>
			<li>
				<img src="../../../../../static/images/icon_05.png"/>
				<div>
					<p class="blod">我的影视</p>
					<p class="normal">0部</p>
				</div>
			</li>
		</ul>
		<div class="active_list" v-for="(i,n) in classity">
			<div class="title_1">
				<p slot="tit">{{i.name}}</p>
				<span slot="allnum">全部（{{i.cityactive.length}}）></span>
			</div>
			<div id="shoplist">
				<div class="ac_video">{{con}}</div>
				<div v-for="(item,index) in i.cityactive" v-if="index<10" class="v_list">
					<Bookpublic>
						<img :src="item.img" slot = "pic" class="domestic_ipm"/>
						<h4 slot="title">{{item.title}}</h4>
						<span class="domestic_actor" slot="title">{{item.actor}}</span>
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
					<p>{{i.cityactive.length}}部</p>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script type="text/javascript">
	import Bookpublic from "../../../bookpublic"
	export default{
		data:function(){
			return {
				classity:[
					{
						name:"演唱会类",num:13,cityactive:[
							{id:1,inputdata:Math.round(5.4/2),actor:"林俊杰",score:"5.4",title:"捉妖记2",img:"../../../../../static/images/hotvideo1.jpg",bool:false,txt:'+'},
							{id:2,inputdata:Math.round(7.5/2),actor:"林俊杰",score:"7.5",title:"唐人街探案2",img:"../../../../../static/images/trjta2.jpg",bool:false,txt:'+'},
							{id:3,inputdata:Math.round(8.5/2),actor:"林俊杰",score:"8.5",title:"红海行动",img:"../../../../../static/images/hhxd.jpg",bool:false,txt:'+'},
							{id:4,inputdata:Math.round(4.8/2),actor:"林俊杰",score:"4.8",title:"西游记女儿国",img:"../../../../../static/images/xyjneg.jpg",bool:false,txt:'+'},
							{id:5,inputdata:Math.round(6.7/2),actor:"林俊杰",score:"6.7",title:"熊出没·变形记",img:"../../../../../static/images/xcmbxj.jpg",bool:false,txt:'+'},
							{id:6,inputdata:Math.round(4.8/2),actor:"林俊杰",score:"4.8",title:"祖宗十九代",img:"../../../../../static/images/zzsjd.jpg",bool:false,txt:'+'},
							{id:7,inputdata:Math.round(6.9/2),actor:"林俊杰",score:"6.9",title:"小马宝莉大电影",img:"../../../../../static/images/xmlyddy.jpg",bool:false,txt:'+'},
							{id:8,inputdata:Math.round(7.9/2),actor:"林俊杰",score:"7.9",title:"马戏之王",img:"../../../../../static/images/mxzw.jpg",bool:false,txt:'+'},
							{id:9,inputdata:Math.round(8.0/2),actor:"林俊杰",score:"8.0",title:"神秘巨星",img:"../../../../../static/images/smjx.jpg",bool:false,txt:'+'},
							{id:10,inputdata:Math.round(7.4/2),actor:"林俊杰",score:"7.4",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",bool:false,txt:'+'},
							{id:11,inputdata:Math.round(7.4/2),actor:"林俊杰",score:"7.4",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",bool:false,txt:'+'},
							{id:12,inputdata:Math.round(7.4/2),actor:"林俊杰",score:"7.4",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",bool:false,txt:'+'},
							{id:13,inputdata:Math.round(7.4/2),actor:"林俊杰",score:"7.4",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",bool:false,txt:'+'},
						]
					},
					{
						name:"展览类",num:13,cityactive:[
							{id:1,inputdata:Math.round(5.4/2),actor:"林俊杰",score:"5.4",title:"捉妖记2",img:"../../../../../static/images/hotvideo1.jpg",bool:false,txt:'+'},
							{id:2,inputdata:Math.round(7.5/2),actor:"林俊杰",score:"7.5",title:"唐人街探案2",img:"../../../../../static/images/trjta2.jpg",bool:false,txt:'+'},
							{id:3,inputdata:Math.round(8.5/2),actor:"林俊杰",score:"8.5",title:"红海行动",img:"../../../../../static/images/hhxd.jpg",bool:false,txt:'+'},
							{id:4,inputdata:Math.round(4.8/2),actor:"林俊杰",score:"4.8",title:"西游记女儿国",img:"../../../../../static/images/xyjneg.jpg",bool:false,txt:'+'},
							{id:5,inputdata:Math.round(6.7/2),actor:"林俊杰",score:"6.7",title:"熊出没·变形记",img:"../../../../../static/images/xcmbxj.jpg",bool:false,txt:'+'},
							{id:6,inputdata:Math.round(4.8/2),actor:"林俊杰",score:"4.8",title:"祖宗十九代",img:"../../../../../static/images/zzsjd.jpg",bool:false,txt:'+'},
							{id:7,inputdata:Math.round(6.9/2),actor:"林俊杰",score:"6.9",title:"小马宝莉大电影",img:"../../../../../static/images/xmlyddy.jpg",bool:false,txt:'+'},
							{id:8,inputdata:Math.round(7.9/2),actor:"林俊杰",score:"7.9",title:"马戏之王",img:"../../../../../static/images/mxzw.jpg",bool:false,txt:'+'},
							{id:9,inputdata:Math.round(8.0/2),actor:"林俊杰",score:"8.0",title:"神秘巨星",img:"../../../../../static/images/smjx.jpg",bool:false,txt:'+'},
							{id:10,inputdata:Math.round(7.4/2),actor:"林俊杰",score:"7.4",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",bool:false,txt:'+'},
							{id:11,inputdata:Math.round(7.4/2),actor:"林俊杰",score:"7.4",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",bool:false,txt:'+'},
							{id:12,inputdata:Math.round(7.4/2),actor:"林俊杰",score:"7.4",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",bool:false,txt:'+'},
							{id:13,inputdata:Math.round(7.4/2),actor:"林俊杰",score:"7.4",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",bool:false,txt:'+'},
						]
					},
					{
						name:"展览类",num:13,cityactive:[
							{id:1,inputdata:Math.round(5.4/2),actor:"林俊杰",score:"5.4",title:"捉妖记2",img:"../../../../../static/images/hotvideo1.jpg",bool:false,txt:'+'},
							{id:2,inputdata:Math.round(7.5/2),actor:"林俊杰",score:"7.5",title:"唐人街探案2",img:"../../../../../static/images/trjta2.jpg",bool:false,txt:'+'},
							{id:3,inputdata:Math.round(8.5/2),actor:"林俊杰",score:"8.5",title:"红海行动",img:"../../../../../static/images/hhxd.jpg",bool:false,txt:'+'},
							{id:4,inputdata:Math.round(4.8/2),actor:"林俊杰",score:"4.8",title:"西游记女儿国",img:"../../../../../static/images/xyjneg.jpg",bool:false,txt:'+'},
							{id:5,inputdata:Math.round(6.7/2),actor:"林俊杰",score:"6.7",title:"熊出没·变形记",img:"../../../../../static/images/xcmbxj.jpg",bool:false,txt:'+'},
							{id:6,inputdata:Math.round(4.8/2),actor:"林俊杰",score:"4.8",title:"祖宗十九代",img:"../../../../../static/images/zzsjd.jpg",bool:false,txt:'+'},
							{id:7,inputdata:Math.round(6.9/2),actor:"林俊杰",score:"6.9",title:"小马宝莉大电影",img:"../../../../../static/images/xmlyddy.jpg",bool:false,txt:'+'},
							{id:8,inputdata:Math.round(7.9/2),actor:"林俊杰",score:"7.9",title:"马戏之王",img:"../../../../../static/images/mxzw.jpg",bool:false,txt:'+'},
							{id:9,inputdata:Math.round(8.0/2),actor:"林俊杰",score:"8.0",title:"神秘巨星",img:"../../../../../static/images/smjx.jpg",bool:false,txt:'+'},
							{id:10,inputdata:Math.round(7.4/2),actor:"林俊杰",score:"7.4",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",bool:false,txt:'+'},
							{id:11,inputdata:Math.round(7.4/2),actor:"林俊杰",score:"7.4",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",bool:false,txt:'+'},
							{id:12,inputdata:Math.round(7.4/2),actor:"林俊杰",score:"7.4",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",bool:false,txt:'+'},
							{id:13,inputdata:Math.round(7.4/2),actor:"林俊杰",score:"7.4",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",bool:false,txt:'+'},
						]
					},
					{
						name:"展览类",num:13,cityactive:[
							{id:1,inputdata:Math.round(5.4/2),actor:"林俊杰",score:"5.4",title:"捉妖记2",img:"../../../../../static/images/hotvideo1.jpg",bool:false,txt:'+'},
							{id:2,inputdata:Math.round(7.5/2),actor:"林俊杰",score:"7.5",title:"唐人街探案2",img:"../../../../../static/images/trjta2.jpg",bool:false,txt:'+'},
							{id:3,inputdata:Math.round(8.5/2),actor:"林俊杰",score:"8.5",title:"红海行动",img:"../../../../../static/images/hhxd.jpg",bool:false,txt:'+'},
							{id:4,inputdata:Math.round(4.8/2),actor:"林俊杰",score:"4.8",title:"西游记女儿国",img:"../../../../../static/images/xyjneg.jpg",bool:false,txt:'+'},
							{id:5,inputdata:Math.round(6.7/2),actor:"林俊杰",score:"6.7",title:"熊出没·变形记",img:"../../../../../static/images/xcmbxj.jpg",bool:false,txt:'+'},
							{id:6,inputdata:Math.round(4.8/2),actor:"林俊杰",score:"4.8",title:"祖宗十九代",img:"../../../../../static/images/zzsjd.jpg",bool:false,txt:'+'},
							{id:7,inputdata:Math.round(6.9/2),actor:"林俊杰",score:"6.9",title:"小马宝莉大电影",img:"../../../../../static/images/xmlyddy.jpg",bool:false,txt:'+'},
							{id:8,inputdata:Math.round(7.9/2),actor:"林俊杰",score:"7.9",title:"马戏之王",img:"../../../../../static/images/mxzw.jpg",bool:false,txt:'+'},
							{id:9,inputdata:Math.round(8.0/2),actor:"林俊杰",score:"8.0",title:"神秘巨星",img:"../../../../../static/images/smjx.jpg",bool:false,txt:'+'},
							{id:10,inputdata:Math.round(7.4/2),actor:"林俊杰",score:"7.4",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",bool:false,txt:'+'},
							{id:11,inputdata:Math.round(7.4/2),actor:"林俊杰",score:"7.4",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",bool:false,txt:'+'},
							{id:12,inputdata:Math.round(7.4/2),actor:"林俊杰",score:"7.4",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",bool:false,txt:'+'},
							{id:13,inputdata:Math.round(7.4/2),actor:"林俊杰",score:"7.4",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",bool:false,txt:'+'},
						]
					},
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
		components:{
			Bookpublic
			
		}
	}
</script>

<style type="text/css">
	.popdomestic{font-size: 0;box-sizing: border-box;width: 100%;}
	.recommmend>img{width: 100%;}
	.popdomestic>.recommmend_movie{width: 3.75rem;border-top: .01rem solid #e1e1e1;border-bottom: .01rem solid #e1e1e1;height: .7rem;display: flex;}
	.recommmend_movie li{font-size: 0;display: flex;margin: .2rem 0;}
	.recommmend_movie li img{width: .35rem;height: .35rem;padding:0 .1rem}
	.recommmend_movie li p{font-size: .12rem;height: .2rem;line-height: .2rem;text-align: left;}
	.recommmend_movie .recommmend_text{padding-right:.4rem ;border-right: .01rem solid #e1e1e1;height: .4rem;}
	.recommmend_movie li .normal{color: #a0a0a0;}
	.public .domestic_ipm{height: 1rem;}
	.domestic_actor{font-size: .12rem;color: #ddd;height: .1rem ;line-height: .1rem;}
	.popdomestic .more{padding: .17rem .35rem;}
</style>