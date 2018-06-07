<template>
	<div class="channel">
		<div class="title_1">
			<p slot="tit">频道</p>
		</div>
		<div class="channel_list">
			<div class="channel_top">
				<img src="../../../../../static/images/zzsjd.jpg"/>
				<div class="channel_title">
					<h5>贺岁电影</h5>
					<p>111111人关注</p>
				</div>
				<div class="channel_attention" @click="attention">
					<div class="channel_chanel" v-if="bool">×  关注</div>
					<div class="channel_add" v-else>√已关注</div>
				</div>
			</div>
			<div class="channel_cont" v-for="(item,index) in list" v-if="index<2">
				<h3>{{item.title}}</h3>
				<p>{{item.cont}}</p>
				<div class="channel_comment">
					<div>
						<img src="../../../../../static/images/ic_album_photo_like_normal.png"/>
						<span>{{item.com}}</span>
					</div>
					<div>
						<img src="../../../../../static/images/ic_album_photo_comment_normal.png"/>
						<span>{{item.like}}</span>
					</div>
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
				bool:true,
				list:[
					{title:"年货节不只有年货，还有一代人的“芳华”",cont:"年货节不只有年货，还有一代人的“芳华”：最近《芳华》正在热映 看过的人好，或追忆过往，或黯然神伤 无不唏嘘那易逝...",com:5,like:6},
					{title:"年货节不只有年货，还有一代人的“芳华”",cont:"年货节不只有年货，还有一代人的“芳华”：最近《芳华》正在热映 看过的人好，或追忆过往，或黯然神伤 无不唏嘘那易逝...",com:5,like:6},
				]
			}
		},
		methods:{
			attention:function(){
				this.bool=!this.bool
			}
		},
		components:{
			Bookpublic
		}
	}
</script>

<style type="text/css">
	.channel_list{margin: .1rem;font-size: 0;box-shadow:0 0 .05rem #cecece;}
	.channel_list img{width: .5rem;height: .5rem;}
	.channel_top{margin:0 .1rem;display: flex;border-bottom: .01rem solid #e1e1e1;padding: .1rem 0;align-items: center;}
	.channel_title{font-size: .16rem;padding: 0 .1rem;}
	.channel_title p{font-size: .12rem;color: #9b9b9b;}
	.channel_attention{font-size: .14rem;margin-left: 1rem;}
	.channel_attention .channel_chanel{background: #42bd55;border-radius: .05rem;color: #fff;width: .7rem;height: .25rem;text-align: center;line-height: .25rem;}
	.channel_attention .channel_add{border-radius: .05rem;color: #9b9b9b;width: .7rem;height: .25rem;text-align: center;line-height: .25rem;border: .01rem solid #ddd}
	.channel_cont{font-size: .12rem;padding: .1rem;}
	.channel_cont h3{height: .2rem;line-height: .2rem;}
	.channel_cont p{font-size: .12rem;color: #989898;height: .35rem;overflow: hidden;}
	.channel_comment{display: flex;padding: .05rem 0;}
	.channel_comment div{padding-right: .1rem;}
	.channel_comment img{width: .13rem;height: .13rem;padding-right: .02rem;}
</style>