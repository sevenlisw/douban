<template>
	<div id="main">
			<div class="cont" v-for="item in list">
				<img :src="item.img"/>
				<dl>
					<dt><span>{{item.classity}}</span></dt>
					<dd v-for="i in item.list1" @click="skip">
						<img :src="i.avatarpic" class="avatar"/>
						<div class="tex">
							<h3>{{i.name}}</h3>
							<p>{{i.intro}}</p>
						</div>
						<span>{{i.num}}人</span>
						<img src="./img/ic_group_check_anonymous.png"/>
					</dd>
				</dl>
			</div>
		</div>
</template>

<script type="text/javascript">
	export default{
		data:function(){
			return {
				list:[
				{classity:"影视",img:"../../../static/img/ic_rec_group_banner_6.png",
				list1:[
					{name:"佳片推荐",intro:"加入豆瓣人数最多的影视组织，互相推荐和交流自认为好的电影，剧集...",avatarpic:"../../../static/img/media.jpg",num:"612808"},
					{name:"佳片推荐",intro:"加入豆瓣人数最多的影视组织，互相推荐和交流自认为好的电影，剧集...",avatarpic:"../../../static/img/media.jpg",num:"612808"},
					{name:"佳片推荐",intro:"加入豆瓣人数最多的影视组织，互相推荐和交流自认为好的电影，剧集...",avatarpic:"../../../static/img/media.jpg",num:"612808"},
					{name:"佳片推荐",intro:"加入豆瓣人数最多的影视组织，互相推荐和交流自认为好的电影，剧集...",avatarpic:"../../../static/img/media.jpg",num:"612808"}
				]},
				{classity:"娱乐",img:"../../../static/img/ic_rec_group_banner_2.png",
				list1:[
					{name:"佳片推荐",intro:"加入豆瓣人数最多的影视组织，互相推荐和交流自认为好的电影，剧集...",avatarpic:"../../../static/img/media.jpg",num:"612808"},
					{name:"佳片推荐",intro:"加入豆瓣人数最多的影视组织，互相推荐和交流自认为好的电影，剧集...",avatarpic:"../../../static/img/media.jpg",num:"612808"},
					{name:"佳片推荐",intro:"加入豆瓣人数最多的影视组织，互相推荐和交流自认为好的电影，剧集...",avatarpic:"../../../static/img/media.jpg",num:"612808"},
				]},
				{classity:"生活",img:"../../../static/img/ic_rec_group_banner_3.png",
				list1:[
					{name:"佳片推荐",intro:"加入豆瓣人数最多的影视组织，互相推荐和交流自认为好的电影，剧集...",avatarpic:"../../../static/img/media.jpg",num:"612808"},
					{name:"佳片推荐",intro:"加入豆瓣人数最多的影视组织，互相推荐和交流自认为好的电影，剧集...",avatarpic:"../../../static/img/media.jpg",num:"612808"},
				]},
				{classity:"军事",img:"../../../static/img/ic_rec_group_banner_4.png",
				list1:[
					{name:"佳片推荐",intro:"加入豆瓣人数最多的影视组织，互相推荐和交流自认为好的电影，剧集...",avatarpic:"../../../static/img/media.jpg",num:"612808"},
					{name:"佳片推荐",intro:"加入豆瓣人数最多的影视组织，互相推荐和交流自认为好的电影，剧集...",avatarpic:"../../../static/img/media.jpg",num:"612808"},
					{name:"佳片推荐",intro:"加入豆瓣人数最多的影视组织，互相推荐和交流自认为好的电影，剧集...",avatarpic:"../../../static/img/media.jpg",num:"612808"},
					{name:"佳片推荐",intro:"加入豆瓣人数最多的影视组织，互相推荐和交流自认为好的电影，剧集...",avatarpic:"../../../static/img/media.jpg",num:"612808"},
					{name:"佳片推荐",intro:"加入豆瓣人数最多的影视组织，互相推荐和交流自认为好的电影，剧集...",avatarpic:"../../../static/img/media.jpg",num:"612808"},
				]},
				{classity:"旅游",img:"../../../static/img/ic_rec_group_banner_5.png",
				list1:[
					{name:"佳片推荐",intro:"加入豆瓣人数最多的影视组织，互相推荐和交流自认为好的电影，剧集...",avatarpic:"../../../static/img/media.jpg",num:"612808"},
					{name:"佳片推荐",intro:"加入豆瓣人数最多的影视组织，互相推荐和交流自认为好的电影，剧集...",avatarpic:"../../../static/img/media.jpg",num:"612808"},
					{name:"佳片推荐",intro:"加入豆瓣人数最多的影视组织，互相推荐和交流自认为好的电影，剧集...",avatarpic:"../../../static/img/media.jpg",num:"612808"},
					{name:"佳片推荐",intro:"加入豆瓣人数最多的影视组织，互相推荐和交流自认为好的电影，剧集...",avatarpic:"../../../static/img/media.jpg",num:"612808"},
				]},
					
					
				]
			}
		},
		methods:{
			skip:function(){
				this.$router.push("/detail")
			}
		}
	}
</script>

<style type="text/css">
	.cont{font-size: 0;padding: 0 .2rem;}	
	.cont img{width: 3.35rem;}
	.cont dt{border-top:1px solid #000 ;width:100%;display: block;text-align: center;margin-top: .15rem;}
	.cont dt span{font-size: .2rem;padding: 0 .1rem;background: #fff;position: relative;top: -.15rem;}
	.cont dd{display: flex;align-items: center;justify-content: space-between;padding: .1rem 0;}
	.cont dd .avatar{width: .53rem;height: .53rem;border:.02rem solid #e5e5e5;border-radius: .05rem;}
	.cont dd .tex{font-size: .12rem;width: 1.8rem;}
	.cont dd .tex p{font-size: .12rem;color: #b5b5b5;height: .35rem;overflow: hidden;}
	.cont dd span{font-size: .12rem;color: #cccccc;}
	.cont dd img{width: .25rem;height: .25rem;}
</style>