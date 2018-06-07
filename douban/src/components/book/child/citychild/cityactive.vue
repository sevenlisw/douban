<template>
	<div class="active">
		<div class="title_1">
			<p slot="tit">热门活动</p>
			<span slot="allnum">全部（{{list.length}}）></span>
		</div>
		<div id="shoplist">
			<div v-for="(item,index) in list" v-if="index<10" class="v_list">
				<Bookpublic>
					<img :src="item.img" slot = "pic" />
					<h4 slot="title">{{item.title}}</h4>
					<div slot="star" class="v_score">
						<p slot="score" class="score">{{item.day}}</p>
					</div>
				</Bookpublic>
			</div>
			<div class="more">
				<p>全部</p>
				<span>------</span>
				<p>{{list.length}}部</p>
			</div>
		</div>
		<div class="title_1">
			<p slot="tit">官方售票</p>
			<span slot="allnum">全部（{{list.length}}）></span>
		</div>
		<div id="shoplist">
			<div v-for="(item,index) in list1" v-if="index<10" class="v_list">
				<Bookpublic>
					<img :src="item.img" slot = "pic" />
					<h4 slot="title">{{item.title}}</h4>
					<div slot="star" class="v_score">
						<p slot="score" class="score">{{item.day}}</p>
					</div>
				</Bookpublic>
			</div>
			<div class="more">
				<p>全部</p>
				<span>------</span>
				<p>{{list.length}}部</p>
			</div>
		</div>
		<Choiceness></Choiceness>
		<div class="active_list" v-for="(i,n) in classity">
			<div class="title_1">
				<p slot="tit">{{i.name}}</p>
				<span slot="allnum">全部（{{i.cityactive.length}}）></span>
			</div>
			<div id="shoplist">
				<div v-for="(item,index) in i.cityactive" v-if="index<10" class="v_list">
					<Bookpublic>
						<img :src="item.img" slot = "pic" />
						<h4 slot="title">{{item.title}}</h4>
						<div slot="star" class="v_score">
							<p slot="score" class="score">{{item.day}}</p>
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
	</div>
	
</template>

<script type="text/javascript">
	import Bookpublic from "../../../bookpublic"
	import Choiceness from "./choiceness"
	export default{
		data:function(){
			return {
				list:[
					{id:1,day:"2017-12-22",title:"捉妖记2",img:"../../../../../static/images/hotvideo1.jpg",},
					{id:2,day:"2017-5-20",title:"唐人街探案2",img:"../../../../../static/images/trjta2.jpg",},
					{id:3,day:"2017-1-2",title:"红海行动",img:"../../../../../static/images/hhxd.jpg",},
					{id:4,day:"2017-2-22",title:"西游记女儿国",img:"../../../../../static/images/xyjneg.jpg",},
					{id:5,day:"2017-12-22",title:"熊出没·变形记",img:"../../../../../static/images/xcmbxj.jpg",},
					{id:6,day:"2017-4-22",title:"祖宗十九代",img:"../../../../../static/images/zzsjd.jpg",},
					{id:7,day:"2017-12-22",title:"小马宝莉大电影",img:"../../../../../static/images/xmlyddy.jpg",},
					{id:8,day:"2017-5-22",title:"马戏之王",img:"../../../../../static/images/mxzw.jpg",},
					{id:9,day:"2017-6-22",title:"神秘巨星",img:"../../../../../static/images/smjx.jpg",},
					{id:10,day:"2017-12-2",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
					{id:11,day:"2017-12-5",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
					{id:12,day:"2017-7-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
					{id:13,day:"2017-8-2",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
				],
				list1:[
					{id:1,day:"2017-12-22",title:"捉妖记2",img:"../../../../../static/images/hotvideo1.jpg",},
					{id:2,day:"2017-12-22",title:"唐人街探案2",img:"../../../../../static/images/trjta2.jpg",},
					{id:3,day:"2017-5-20",title:"红海行动",img:"../../../../../static/images/hhxd.jpg",},
					{id:4,day:"2017-12-22",title:"西游记女儿国",img:"../../../../../static/images/xyjneg.jpg",},
					{id:5,day:"2017-12-22",title:"熊出没·变形记",img:"../../../../../static/images/xcmbxj.jpg",},
					{id:6,day:"2017-12-22",title:"祖宗十九代",img:"../../../../../static/images/zzsjd.jpg",},
					{id:7,day:"2017-5-20",title:"小马宝莉大电影",img:"../../../../../static/images/xmlyddy.jpg",},
					{id:8,day:"2017-12-22",title:"马戏之王",img:"../../../../../static/images/mxzw.jpg",},
					{id:9,day:"2017-5-22",title:"神秘巨星",img:"../../../../../static/images/smjx.jpg",},
					{id:10,day:"2017-5-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
					{id:11,day:"2017-12-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
					{id:12,day:"2017-5-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
					{id:13,day:"2017-12-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
				],
				classity:[
					{
						name:"演唱会类",num:13,cityactive:[
							{id:1,day:"2017-12-22",title:"捉妖记2",img:"../../../../../static/images/hotvideo1.jpg",},
							{id:2,day:"2017-5-22",title:"唐人街探案2",img:"../../../../../static/images/trjta2.jpg",},
							{id:3,day:"2017-2-22",title:"红海行动",img:"../../../../../static/images/hhxd.jpg",},
							{id:4,day:"2017-5-22",title:"西游记女儿国",img:"../../../../../static/images/xyjneg.jpg",},
							{id:5,day:"2017-12-2",title:"熊出没·变形记",img:"../../../../../static/images/xcmbxj.jpg",},
							{id:6,day:"2017-12-22",title:"祖宗十九代",img:"../../../../../static/images/zzsjd.jpg",},
							{id:7,day:"2017-1-2",title:"小马宝莉大电影",img:"../../../../../static/images/xmlyddy.jpg",},
							{id:8,day:"2017-5-22",title:"马戏之王",img:"../../../../../static/images/mxzw.jpg",},
							{id:9,day:"2017-12-22",title:"神秘巨星",img:"../../../../../static/images/smjx.jpg",},
							{id:10,day:"2017-12-2",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:11,day:"2017-1-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:12,day:"2017-2-2",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:13,day:"2017-12-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
						]
					},
					{
						name:"展览类",num:13,cityactive:[
							{id:1,day:"2017-12-22",title:"捉妖记2",img:"../../../../../static/images/hotvideo1.jpg",},
							{id:2,day:"2017-12-22",title:"唐人街探案2",img:"../../../../../static/images/trjta2.jpg",},
							{id:3,day:"2017-1-22",title:"红海行动",img:"../../../../../static/images/hhxd.jpg",},
							{id:4,day:"2017-1-2",title:"西游记女儿国",img:"../../../../../static/images/xyjneg.jpg",},
							{id:5,day:"2017-12-2",title:"熊出没·变形记",img:"../../../../../static/images/xcmbxj.jpg",},
							{id:6,day:"2017-5-2",title:"祖宗十九代",img:"../../../../../static/images/zzsjd.jpg",},
							{id:7,day:"2017-12-22",title:"小马宝莉大电影",img:"../../../../../static/images/xmlyddy.jpg",},
							{id:8,day:"2017-6-17",title:"马戏之王",img:"../../../../../static/images/mxzw.jpg",},
							{id:9,day:"2017-12-22",title:"神秘巨星",img:"../../../../../static/images/smjx.jpg",},
							{id:10,day:"2017-12-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:11,day:"2017-12-2",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:12,day:"2017-1-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:13,day:"2017-12-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
						]
					},
					{
						name:"音乐类",num:13,cityactive:[
							{id:1,day:"2017-12-22",title:"捉妖记2",img:"../../../../../static/images/hotvideo1.jpg",},
							{id:2,day:"2017-12-22",title:"唐人街探案2",img:"../../../../../static/images/trjta2.jpg",},
							{id:3,day:"2017-1-22",title:"红海行动",img:"../../../../../static/images/hhxd.jpg",},
							{id:4,day:"2017-1-2",title:"西游记女儿国",img:"../../../../../static/images/xyjneg.jpg",},
							{id:5,day:"2017-12-2",title:"熊出没·变形记",img:"../../../../../static/images/xcmbxj.jpg",},
							{id:6,day:"2017-5-2",title:"祖宗十九代",img:"../../../../../static/images/zzsjd.jpg",},
							{id:7,day:"2017-12-22",title:"小马宝莉大电影",img:"../../../../../static/images/xmlyddy.jpg",},
							{id:8,day:"2017-6-17",title:"马戏之王",img:"../../../../../static/images/mxzw.jpg",},
							{id:9,day:"2017-12-22",title:"神秘巨星",img:"../../../../../static/images/smjx.jpg",},
							{id:10,day:"2017-12-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:11,day:"2017-12-2",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:12,day:"2017-1-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:13,day:"2017-12-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
						]
					},
					{
						name:"戏剧类",num:13,cityactive:[
							{id:1,day:"2017-12-22",title:"捉妖记2",img:"../../../../../static/images/hotvideo1.jpg",},
							{id:2,day:"2017-5-22",title:"唐人街探案2",img:"../../../../../static/images/trjta2.jpg",},
							{id:3,day:"2017-2-22",title:"红海行动",img:"../../../../../static/images/hhxd.jpg",},
							{id:4,day:"2017-5-22",title:"西游记女儿国",img:"../../../../../static/images/xyjneg.jpg",},
							{id:5,day:"2017-12-2",title:"熊出没·变形记",img:"../../../../../static/images/xcmbxj.jpg",},
							{id:6,day:"2017-12-22",title:"祖宗十九代",img:"../../../../../static/images/zzsjd.jpg",},
							{id:7,day:"2017-1-2",title:"小马宝莉大电影",img:"../../../../../static/images/xmlyddy.jpg",},
							{id:8,day:"2017-5-22",title:"马戏之王",img:"../../../../../static/images/mxzw.jpg",},
							{id:9,day:"2017-12-22",title:"神秘巨星",img:"../../../../../static/images/smjx.jpg",},
							{id:10,day:"2017-12-2",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:11,day:"2017-1-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:12,day:"2017-2-2",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:13,day:"2017-12-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
						]
					},
					{
						name:"聚会类",num:13,cityactive:[
							{id:1,day:"2017-12-22",title:"捉妖记2",img:"../../../../../static/images/hotvideo1.jpg",},
							{id:2,day:"2017-5-22",title:"唐人街探案2",img:"../../../../../static/images/trjta2.jpg",},
							{id:3,day:"2017-2-22",title:"红海行动",img:"../../../../../static/images/hhxd.jpg",},
							{id:4,day:"2017-5-22",title:"西游记女儿国",img:"../../../../../static/images/xyjneg.jpg",},
							{id:5,day:"2017-12-2",title:"熊出没·变形记",img:"../../../../../static/images/xcmbxj.jpg",},
							{id:6,day:"2017-12-22",title:"祖宗十九代",img:"../../../../../static/images/zzsjd.jpg",},
							{id:7,day:"2017-1-2",title:"小马宝莉大电影",img:"../../../../../static/images/xmlyddy.jpg",},
							{id:8,day:"2017-5-22",title:"马戏之王",img:"../../../../../static/images/mxzw.jpg",},
							{id:9,day:"2017-12-22",title:"神秘巨星",img:"../../../../../static/images/smjx.jpg",},
							{id:10,day:"2017-12-2",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:11,day:"2017-1-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:12,day:"2017-2-2",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:13,day:"2017-12-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
						]
					},
					{
						name:"电影类",num:13,cityactive:[
							{id:1,day:"2017-12-22",title:"捉妖记2",img:"../../../../../static/images/hotvideo1.jpg",},
							{id:2,day:"2017-5-22",title:"唐人街探案2",img:"../../../../../static/images/trjta2.jpg",},
							{id:3,day:"2017-2-22",title:"红海行动",img:"../../../../../static/images/hhxd.jpg",},
							{id:4,day:"2017-5-22",title:"西游记女儿国",img:"../../../../../static/images/xyjneg.jpg",},
							{id:5,day:"2017-12-2",title:"熊出没·变形记",img:"../../../../../static/images/xcmbxj.jpg",},
							{id:13,day:"2017-12-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
						]
					},
					{
						name:"讲座类",num:13,cityactive:[
							{id:1,day:"2017-12-22",title:"捉妖记2",img:"../../../../../static/images/hotvideo1.jpg",},
							{id:2,day:"2017-5-22",title:"唐人街探案2",img:"../../../../../static/images/trjta2.jpg",},
							{id:3,day:"2017-2-22",title:"红海行动",img:"../../../../../static/images/hhxd.jpg",},
							{id:4,day:"2017-5-22",title:"西游记女儿国",img:"../../../../../static/images/xyjneg.jpg",},
							{id:5,day:"2017-12-2",title:"熊出没·变形记",img:"../../../../../static/images/xcmbxj.jpg",},
							{id:11,day:"2017-1-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:12,day:"2017-2-2",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:13,day:"2017-12-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
						]
					},
					{
						name:"课程类",num:13,cityactive:[
							{id:1,day:"2017-12-22",title:"捉妖记2",img:"../../../../../static/images/hotvideo1.jpg",},
							{id:2,day:"2017-5-22",title:"唐人街探案2",img:"../../../../../static/images/trjta2.jpg",},
							{id:3,day:"2017-2-22",title:"红海行动",img:"../../../../../static/images/hhxd.jpg",},
							{id:4,day:"2017-5-22",title:"西游记女儿国",img:"../../../../../static/images/xyjneg.jpg",},
							{id:5,day:"2017-12-2",title:"熊出没·变形记",img:"../../../../../static/images/xcmbxj.jpg",},
							{id:6,day:"2017-12-22",title:"祖宗十九代",img:"../../../../../static/images/zzsjd.jpg",},
							{id:7,day:"2017-1-2",title:"小马宝莉大电影",img:"../../../../../static/images/xmlyddy.jpg",},
							{id:8,day:"2017-5-22",title:"马戏之王",img:"../../../../../static/images/mxzw.jpg",},
							{id:9,day:"2017-12-22",title:"神秘巨星",img:"../../../../../static/images/smjx.jpg",},
							{id:10,day:"2017-12-2",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:11,day:"2017-1-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:12,day:"2017-2-2",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:13,day:"2017-12-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
						]
					},
					{
						name:"旅行类",num:13,cityactive:[
							{id:1,day:"2017-12-22",title:"捉妖记2",img:"../../../../../static/images/hotvideo1.jpg",},
							{id:2,day:"2017-5-22",title:"唐人街探案2",img:"../../../../../static/images/trjta2.jpg",},
							{id:3,day:"2017-2-22",title:"红海行动",img:"../../../../../static/images/hhxd.jpg",},
							{id:4,day:"2017-5-22",title:"西游记女儿国",img:"../../../../../static/images/xyjneg.jpg",},
							{id:5,day:"2017-12-2",title:"熊出没·变形记",img:"../../../../../static/images/xcmbxj.jpg",},
							{id:6,day:"2017-12-22",title:"祖宗十九代",img:"../../../../../static/images/zzsjd.jpg",},
							{id:7,day:"2017-1-2",title:"小马宝莉大电影",img:"../../../../../static/images/xmlyddy.jpg",},
							{id:8,day:"2017-5-22",title:"马戏之王",img:"../../../../../static/images/mxzw.jpg",},
							{id:9,day:"2017-12-22",title:"神秘巨星",img:"../../../../../static/images/smjx.jpg",},
							{id:10,day:"2017-12-2",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:11,day:"2017-1-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:12,day:"2017-2-2",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:13,day:"2017-12-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
						]
					},
					{
						name:"亲子类",num:13,cityactive:[
							{id:1,day:"2017-12-22",title:"捉妖记2",img:"../../../../../static/images/hotvideo1.jpg",},
							{id:2,day:"2017-5-22",title:"唐人街探案2",img:"../../../../../static/images/trjta2.jpg",},
							{id:3,day:"2017-2-22",title:"红海行动",img:"../../../../../static/images/hhxd.jpg",},
							{id:4,day:"2017-5-22",title:"西游记女儿国",img:"../../../../../static/images/xyjneg.jpg",},
							{id:5,day:"2017-12-2",title:"熊出没·变形记",img:"../../../../../static/images/xcmbxj.jpg",},
							{id:6,day:"2017-12-22",title:"祖宗十九代",img:"../../../../../static/images/zzsjd.jpg",},
							{id:7,day:"2017-1-2",title:"小马宝莉大电影",img:"../../../../../static/images/xmlyddy.jpg",},
							{id:8,day:"2017-5-22",title:"马戏之王",img:"../../../../../static/images/mxzw.jpg",},
							{id:9,day:"2017-12-22",title:"神秘巨星",img:"../../../../../static/images/smjx.jpg",},
							{id:10,day:"2017-12-2",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:11,day:"2017-1-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:12,day:"2017-2-2",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:13,day:"2017-12-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
						]
					},
					{
						name:"公益类",num:13,cityactive:[
							{id:1,day:"2017-12-22",title:"捉妖记2",img:"../../../../../static/images/hotvideo1.jpg",},
							{id:2,day:"2017-5-22",title:"唐人街探案2",img:"../../../../../static/images/trjta2.jpg",},
							{id:3,day:"2017-2-22",title:"红海行动",img:"../../../../../static/images/hhxd.jpg",},
							{id:4,day:"2017-5-22",title:"西游记女儿国",img:"../../../../../static/images/xyjneg.jpg",},
							{id:5,day:"2017-12-2",title:"熊出没·变形记",img:"../../../../../static/images/xcmbxj.jpg",},
							{id:6,day:"2017-12-22",title:"祖宗十九代",img:"../../../../../static/images/zzsjd.jpg",},
							{id:7,day:"2017-1-2",title:"小马宝莉大电影",img:"../../../../../static/images/xmlyddy.jpg",},
							{id:8,day:"2017-5-22",title:"马戏之王",img:"../../../../../static/images/mxzw.jpg",},
							{id:9,day:"2017-12-22",title:"神秘巨星",img:"../../../../../static/images/smjx.jpg",},
							{id:10,day:"2017-12-2",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:11,day:"2017-1-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:12,day:"2017-2-2",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:13,day:"2017-12-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
						]
					},
					{
						name:"运动类",num:13,cityactive:[
							{id:1,day:"2017-12-22",title:"捉妖记2",img:"../../../../../static/images/hotvideo1.jpg",},
							{id:2,day:"2017-5-22",title:"唐人街探案2",img:"../../../../../static/images/trjta2.jpg",},
							{id:3,day:"2017-2-22",title:"红海行动",img:"../../../../../static/images/hhxd.jpg",},
							{id:4,day:"2017-5-22",title:"西游记女儿国",img:"../../../../../static/images/xyjneg.jpg",},
							{id:5,day:"2017-12-2",title:"熊出没·变形记",img:"../../../../../static/images/xcmbxj.jpg",},
							{id:6,day:"2017-12-22",title:"祖宗十九代",img:"../../../../../static/images/zzsjd.jpg",},
							{id:7,day:"2017-1-2",title:"小马宝莉大电影",img:"../../../../../static/images/xmlyddy.jpg",},
							{id:8,day:"2017-5-22",title:"马戏之王",img:"../../../../../static/images/mxzw.jpg",},
							{id:9,day:"2017-12-22",title:"神秘巨星",img:"../../../../../static/images/smjx.jpg",},
							{id:10,day:"2017-12-2",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:11,day:"2017-1-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:12,day:"2017-2-2",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:13,day:"2017-12-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
						]
					},
					{
						name:"赛事类",num:13,cityactive:[
							{id:1,day:"2017-12-22",title:"捉妖记2",img:"../../../../../static/images/hotvideo1.jpg",},
							{id:12,day:"2017-2-2",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
							{id:13,day:"2017-12-22",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",},
						]
					},
				]
			}
		},
		watch:{
			inputdata:function(value){
				console.log(value)
			}
		},
		components:{
			Bookpublic,
			Choiceness
		}
	}
</script>

<style type="text/css">
	.more{background: #f3f3f3;height: .45rem;margin: .05rem;font-size: .14rem;padding: .4rem .35rem;text-align: center;color: #bababa;height: .65rem;}
	.more>p{width: 0.4rem;height: .25rem;line-height: .25rem;}
	.more>span{color: #ccc;}
</style>