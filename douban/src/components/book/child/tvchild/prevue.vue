<template>
	<div class="prevue">
		<div class="title_1">
			<p slot="tit">热门预告片</p>
			<span slot="allnum">全部85 ></span>
		</div>
		<div class="prevue_all">
			<div class="prevue_list" v-for="(item,index) in list" v-if="index<10">
				<img :src="item.img"/>
				<p>{{item.title}}</p>
				<span>{{item.intro}}</span>
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
					{id:1,title:"捉妖记2",img:"../../../../../static/images/hotvideo1.jpg",intro:"中国预告片：定档版（中文字幕）"},
					{id:2,title:"唐人街探案2",img:"../../../../../static/images/trjta2.jpg",intro:"中国预告片：定档版（中文字幕）"},
					{id:3,title:"红海行动",img:"../../../../../static/images/hhxd.jpg",intro:"中国预告片：定档版（中文字幕）"},
					{id:4,title:"西游记女儿国",img:"../../../../../static/images/xyjneg.jpg",intro:"中国预告片：定档版（中文字幕）"},
					{id:5,title:"熊出没·变形记",img:"../../../../../static/images/xcmbxj.jpg",intro:"中国预告片：定档版（中文字幕）"},
					{id:6,title:"祖宗十九代",img:"../../../../../static/images/zzsjd.jpg",intro:"中国预告片：定档版（中文字幕）"},
					{id:7,title:"小马宝莉大电影",img:"../../../../../static/images/xmlyddy.jpg",intro:"中国预告片：定档版（中文字幕）"},
					{id:8,title:"马戏之王",img:"../../../../../static/images/mxzw.jpg",intro:"中国预告片：定档版（中文字幕）"},
					{id:9,title:"神秘巨星",img:"../../../../../static/images/smjx.jpg",intro:"中国预告片：定档版（中文字幕）"},
					{id:10,title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",intro:"中国预告片：定档版（中文字幕）"},
					{id:11,title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",intro:"中国预告片：定档版（中文字幕）"},
					{id:12,title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",intro:"中国预告片：定档版（中文字幕）"},
					{id:13,title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",intro:"中国预告片：定档版（中文字幕）"},
				],
				con:""
			}
		},
	}
</script>

<style type="text/css">
	.prevue_all{overflow-x: auto;display: flex;}
	.prevue_all::-webkit-scrollbar{display: none;}
	.prevue_list{font-size: 0;padding: 0 .05rem;}
	.prevue_list img{width: 2rem;height: 1rem;}
	.prevue_list p{font-size: .12rem;color: #999999;height: .2rem;line-height: .2rem;}
	.prevue_list span{font-size: .13rem;height: .2rem;line-height: .2rem;}
</style>