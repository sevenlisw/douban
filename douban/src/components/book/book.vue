<template>
	<div class="book">
		<Homeheader class="nav">
		<p slot="titl">书影音</p>
		<img src="./img/ic_group_search.png" class="search" slot="left"/>
		<img src="./img/ic_create_group_chat_blue.png" class="chat" slot="right"/>
		
	</Homeheader>
	<div class="searchBar" id="searchBar" >
		<ul class="book_wrap" id="book_wrap" :class="searchBarFixed == true ? 'isFixed' :'book_wrap'">
			<li :class="{active:index==1}" @click="index=1"><router-link to="/book/video" class="active">电影</router-link></li>
			<li :class="{active:index==2}" @click="index=2"><router-link to="/book/read">读书</router-link></li>
			<li :class="{active:index==3}" @click="index=3"><router-link to="/book/tv">电视</router-link></li>
			<li :class="{active:index==4}" @click="index=4"><router-link to="/book/city">同城</router-link></li>
			<li :class="{active:index==5}" @click="index=5"><router-link to="/book/music">音乐</router-link></li>
		</ul>
	</div>
	
	<router-view></router-view>
	<!--<div class="searchBar" id="searchBar">
	  <ul :class="searchBarFixed == true ? 'isFixed' :''">
	    <li>区域<i class="iconfont icon-jiantouxia"></i></li>
	    <li>价格<i class="iconfont icon-jiantouxia"></i></li>
	    <li>房型<i class="iconfont icon-jiantouxia"></i></li>
	    <li>更多<i class="iconfont icon-jiantouxia"></i></li>
	  </ul>
	</div>-->
	</div>
	
</template>

<script type="text/javascript">
	import Homeheader from "../header"
	export default{
		name:"Book",
		data:function(){
			return {
				index:1,
				searchBarFixed:true
			}
		},
		created:function(){
			this.$router.push("/book/video")
		},
		methods:{
		handleScroll () {
		  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
		  console.log(scrollTop)
		  var offsetTop = document.querySelector('#searchBar').offsetTop
		  console.log(offsetTop)
		  if (scrollTop > offsetTop) {
		    this.searchBarFixed = true
		  } else {
		    this.searchBarFixed = false
		  }
		},	
		},
		components:{
			Homeheader,
		},
		mounted () {
		  window.addEventListener('scroll', this.handleScroll)
		},
	}
</script>

<style type="text/css">
.book_wrap{float: left;border-bottom: .01rem solid #ccc;font-size: .15rem;height: .41rem;line-height: .41rem;width: 3.75rem;}
.book_wrap li{text-align: center;border-bottom: .01rem solid #fff;float: left;width: 20%;}
.book_wrap a{text-decoration: none;color: #000;width: 20%;height: .4rem;line-height: .4rem;width: 100%;display: inline-block;float: left;}
.book_wrap .active a{border-bottom: .02rem solid limegreen;color: limegreen;font-weight: bold;}
.isFixed{
    position:fixed;
    background-color:#Fff;
    top:0;
    z-index:1;
  }
</style>