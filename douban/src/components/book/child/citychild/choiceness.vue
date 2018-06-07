<template>
	<div class="choiceness">
		<div class="title_1">
			<p slot="tit">影视热映</p>
		</div>
		<ul class="choiceness_classity">
			<li class="choiceness_list" v-for="item in list"  v-bind:style="{backgroundImage:item.backgroundimg}">
				<p>{{item.title}} </p>
				<p>{{item.intro}}</p>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	import Bookpublic from "../../../bookpublic"
	export default{
		data:function(){
			return {
				list:[
					{title:"折扣演出",intro:"官方售票 正品保证",backgroundimg:"url(../../../../../static/images/hotvideo1.jpg)"},
					{title:"音乐现场",intro:"官方售票 正品保证",backgroundimg:"url(../../../../../static/images/moviepic_06.jpg)"},
					{title:"孟京辉精选",intro:"官方售票 正品保证",backgroundimg:"url(../../../../../static/images/read15.jpg)"},
					{title:"玩转展览馆",intro:"官方售票 正品保证",backgroundimg:"url(../../../../../static/images/read33.jpg)"},
				],
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
	.choiceness_classity{display: flex;overflow-x: auto;width: 3.75rem;}
	.choiceness_classity::-webkit-scrollbar{display: none}
	.choiceness_classity .choiceness_list{width: 1.5rem;font-size: .14rem;text-align: center;border-radius: .2rem;margin: .05rem;padding: .6rem .2rem;}
	.choiceness_classity .choiceness_list p{width: 1rem;color: #fff;}
	.choiceness_classity .choiceness_list p:nth-child(2){font-size: .12rem;}
</style>