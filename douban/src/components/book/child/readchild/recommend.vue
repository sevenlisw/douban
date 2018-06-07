<template>
	<div class="recommmend">
		<img src="../../../../../static/images/banner_read_02.jpg"/>\
		<dl class="recommmend_list">
			<dt  class="title_1">
				<p slot="tit">今日推荐</p>
				<span slot="allnum">全部 ({{videolist.length+4}}) ></span>
			</dt>
			<dd>
				<div class="video_item" v-for="item in videolist">
					<img :src="item.pic" class="video_pic"/>
					<p class="video_cont" :style="{background: item.background}">{{item.detail}}</p>
					<span>{{item.tag}}</span>
				</div>
			</dd>
		</dl>
		<ul class="recommmend_movie">
			<li class="recommmend_text">
				<img src="../../../../../static/images/icon_03.png"/>
				<div>
					<p class="blod">找图书</p>
					<p class="normal">旅行/小说/奇幻</p>
				</div>
			</li>
			<li>
				<img src="../../../../../static/images/icon_05.png"/>
				<div>
					<p class="blod">我的图书</p>
					<p class="normal">0本</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default{
		data:function(){
			return {
				videolist:[
					{pic:"../../../../../static/images/read01.png",detail:"万万没想到，史上最省钱海报竟出自漫威之手!",tag:"我读",background:"rgba(0,0,0,.7)"},
					{pic:"../../../../../static/images/read02.png",detail:"万万没想到，史上最省钱海报竟出自漫威之手!",tag:"新书过眼",background:"rgba(169,151,151,.7)"},
					{pic:"../../../../../static/images/moviepic_05.jpg",detail:"万万没想到，史上最省钱海报竟出自漫威之手!",tag:"一周大新闻",background:"rgba(157,13,5,.7)"},
					{pic:"../../../../../static/images/read02.png",detail:"万万没想到，史上最省钱海报竟出自漫威之手!",tag:"一周大新闻",background:"rgba(119,55,123,.7)"},
					{pic:"../../../../../static/images/read03.jpg",detail:"万万没想到，史上最省钱海报竟出自漫威之手!",tag:"一周大新闻",background:"rgba(0,0,0,.7)"},
					{pic:"../../../../../static/images/read04.jpg",detail:"万万没想到，史上最省钱海报竟出自漫威之手!",tag:"一周大新闻",background:"rgba(229,218,196,.7)"},
					{pic:"../../../../../static/images/read05.jpg",detail:"万万没想到，史上最省钱海报竟出自漫威之手!",tag:"一周大新闻",background:"rgba(128,200,60,.7)"}
				]
			}
		}
	}
</script>

<style type="text/css">
	.recommmend{font-size: 0;box-sizing: border-box;width: 100%;}
	.recommmend>img{width: 100%;}
	.recommmend_list {padding: 0 .1rem;}
	.recommmend_list dd{display: flex;overflow-x: auto;}
	.recommmend_list dd::-webkit-scrollbar{display:none}
	.recommmend_list dd .video_item{width: 1.9rem;margin: .05rem;position: relative;height: 1.7rem;}
	.recommmend_list dd .video_pic{width: 1.9rem;height: 1.7rem;}
	.recommmend_list dd .video_cont{font-size: .12rem;background: rgba(0,0,0,.7);color: #fff;padding: .05rem .1rem;height: .45rem;position: absolute;bottom: 0;left: 0;}
	.recommmend_list dd span{position: absolute;left: .1rem;bottom: .6rem;font-size: .12rem;background: #fff;padding: .02rem;border-radius: .05rem;display: block;}
	.recommmend .recommmend_movie{width: 3.75rem;border-top: .01rem solid #e1e1e1;border-bottom: .01rem solid #e1e1e1;height: .7rem;margin: .25rem 0;display: flex;}
	.recommmend_movie li{font-size: 0;display: flex;margin: .2rem 0;}
	.recommmend_movie li img{width: .35rem;height: .35rem;padding:0 .1rem}
	.recommmend_movie li p{font-size: .12rem;height: .2rem;line-height: .2rem;text-align: left;}
	.recommmend_movie .recommmend_text{padding-right:.4rem ;border-right: .01rem solid #e1e1e1;height: .4rem;}
	.recommmend_movie li .normal{color: #a0a0a0;}
</style>