<template>
	<div class="hotwrap">
		<div class="txt">热点</div>
		<div class="hot" v-for="item in list">
			<div class="left">
				<h2>{{item.title}}</h2>
				<p>{{item.target.desc}}</p>
				
				<span><p class="line">—</p>作者：{{item.target.author.name}}</span>
			</div>
			<div class="right">
				<img :src="item.target.author.avatar"/>
			</div>
		</div>
	</div>
	
</template>

<script type="text/javascript">
import Vue from "vue"
import VueAxios from "vue-axios"
import axios from "axios"
Vue.use(VueAxios,axios)
	export default{
		data:function(){
			return {list:''}
		},
		created:function(){
			this.axios.get("static/homeData.json").then((res)=>{
				console.log(res.data.recommend_feeds)
				this.list = res.data.recommend_feeds
			})
		}
	}
</script>

<style type="text/css">

.txt{font-size: .18rem;margin-top: .2rem;height: .2rem;line-height: .2rem;padding-left: .2rem;border-left: .04rem solid #fc8243;color: #fc8243;}

.hot{width: 100%;display: flex;justify-content: space-between;padding: .2rem .2rem .1rem;box-sizing: border-box;border-bottom: .01rem solid #ccc;}
.left{font-size: .2rem;padding-right: .25rem;width: 2.13rem;position: relative;padding-bottom: .2rem;}
.left h2{font-size: .18rem;}
.left p{font-size: .12rem;color: #aeaeae;padding-bottom: .05rem;}
.left span .line{height: .1rem;color: #d3d3d3;}
.left  span{font-size: .12rem;color: #d2d2d2;position: absolute;bottom: 0;left: 0;}
.right{font-size: 0;width: .95rem;height: .95rem;border: .01rem solid #CDCDCD;}
.right img{width: .95rem;}
</style>