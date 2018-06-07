<template>
	<div class="insterested">
		<div class="title_1">
			<p slot="tit">你可能感兴趣</p>
		</div>
		<div v-for="(item,index) in list" >
			<div class="insterested_list" v-if="item.id%5!==0">
				<div class="insterested_pic">
					<img :src="item.img"  class="insterested_img"/>
				</div>
				<div class="insterested_title">
					<h5>{{item.title}}<span>({{item.year}})</span></h5>
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
					<p class="insterested_actor">{{item.year}}/{{item.actor}}</p>
					<h3>最近值得看的热门电影</h3>
				</div>
				<div class="insterested_inster" @click="del(index)"  v-show="item.bool">不感兴趣</div>
					<img src="../../../../../static/images/notification_more.png" class="insterested_icon" @click="change(item)"/>
			</div>
			<div class="insterested_list insterested_list1" v-else :style="{background: item.background}">
				<div>
					<div class="insterested_img2">
						<img src="../../../../../static/images/ic_channel_content_comment_flag.png"/>
					</div>
					<div class="insterested_title insterested_title1">
						<h5>{{item.title}}</h5>
						<p class="insterested_actor insterested_actor1">{{item.year}}/{{item.actor}}</p>
						<h3>最近值得看的热门电影</h3>
					</div>
				</div>
				<div class="insterested_pic1">
					<img :src="item.img"  class="insterested_img1"/>
				</div>
				<div class="insterested_inster" @click="del(index)" v-show="item.bool">不感兴趣</div>
					<img src="../../../../../static/images/notification_more.png" class="insterested_icon" @click="change(item)"/>
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
					{id:1,inputdata:Math.round(7.3/2),score:"7.3",title:"恋恋视距离",img:"../../../../../static/images/read37.jpg",year:2016,actor:"卢卡斯·尼尔-维尔博路格赫 / 亚伦·科斯塔·加尼斯 / 麦可拉·沃金丝 / 黛比·杰夫 / 迈克尔·鲁本斯通 / 哈里森·吉文斯 / 蕾妮·威利特 / 德鲁·巴尔",background:"rgba(0,0,0,.7)",bool:false},
					{id:2,inputdata:Math.round(7.5/2),score:"7.5",title:"唐人街探案2",img:"../../../../../static/images/read38.jpg",year:2017,actor:" 查内尔·克雷斯韦尔 / 尼克·迈瑞莱格伦 / 阿比盖尔·劳里 / 刘易斯·布朗 / 多米尼克·卡特 / 阿米莉亚·克拉克 / 克里斯·乔奇",background:"rgba(0,0,0,.7)",bool:false},
					{id:3,inputdata:Math.round(7.7/2),score:"7.7",title:"猎凶风河谷",img:"../../../../../static/images/read39.jpg",year:2017,actor:" 杰瑞米·雷纳 / 伊丽莎白·奥尔森 / 凯尔西·周 / 茱莉亚·琼斯 / 特欧·布里奥尼斯 / 阿佩萨纳赫克沃特 / 格雷厄姆·格林 / 坦图·卡丁诺 / 埃里克·兰格 / 吉尔·伯明翰 / 阿尔西娅·萨姆 / 托卡拉·克利福德 / 马丁·桑斯梅耶 / 泰勒·拉勒卡",background:"rgba(0,0,0,.7)",bool:false},
					{id:4,inputdata:Math.round(8.3/2),score:"8.3",title:"伤物语3：冷血篇",img:"../../../../../static/images/read40.jpg",year:2017,actor:" 神谷浩史 / 坂本真绫 / 堀江由衣 / 樱井孝宏 / 入野自由 / 江原正士 / 大塚芳忠",background:"rgba(0,0,0,.7)",bool:false},
					{id:5,inputdata:Math.round(6.7/2),score:"6.7",title:"熊出没·变形记",img:"../../../../../static/images/read41.jpg",year:2016,actor:" 查内尔·克雷斯韦尔 / 尼克·迈瑞莱格伦 / 阿比盖尔·劳里 / 刘易斯·布朗 / 多米尼克·卡特 / 阿米莉亚·克拉克 / 克里斯·乔奇",background:"rgba(42,59,41,.7)",bool:false},
					{id:6,inputdata:Math.round(4.8/2),score:"4.8",title:"祖宗十九代",img:"../../../../../static/images/read42.jpg",year:2016,actor:" 查内尔·克雷斯韦尔 / 尼克·迈瑞莱格伦 / 阿比盖尔·劳里 / 刘易斯·布朗 / 多米尼克·卡特 / 阿米莉亚·克拉克 / 克里斯·乔奇",background:"rgba(0,0,0,.7)",bool:false},
					{id:7,inputdata:Math.round(6.9/2),score:"6.9",title:"小马宝莉大电影",img:"../../../../../static/images/read43.jpg",year:2016,actor:" 查内尔·克雷斯韦尔 / 尼克·迈瑞莱格伦 / 阿比盖尔·劳里 / 刘易斯·布朗 / 多米尼克·卡特 / 阿米莉亚·克拉克 / 克里斯·乔奇",background:"rgba(0,0,0,.7)",bool:false},
					{id:8,inputdata:Math.round(7.9/2),score:"7.9",title:"马戏之王",img:"../../../../../static/images/read44.jpg",year:2016,actor:" 查内尔·克雷斯韦尔 / 尼克·迈瑞莱格伦 / 阿比盖尔·劳里 / 刘易斯·布朗 / 多米尼克·卡特 / 阿米莉亚·克拉克 / 克里斯·乔奇",background:"rgba(0,0,0,.7)",bool:false},
					{id:9,inputdata:Math.round(8.0/2),score:"8.0",title:"神秘巨星",img:"../../../../../static/images/smjx.jpg",year:2016,actor:" 查内尔·克雷斯韦尔 / 尼克·迈瑞莱格伦 / 阿比盖尔·劳里 / 刘易斯·布朗 / 多米尼克·卡特 / 阿米莉亚·克拉克 / 克里斯·乔奇",background:"rgba(0,0,0,.7)",bool:false},
					{id:10,inputdata:Math.round(7.4/2),score:"7.4",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",year:2016,actor:" 查内尔·克雷斯韦尔 / 尼克·迈瑞莱格伦 / 阿比盖尔·劳里 / 刘易斯·布朗 / 多米尼克·卡特 / 阿米莉亚·克拉克 / 克里斯·乔奇",background:"rgba(157,10,0,.7)",bool:false},
					{id:11,inputdata:Math.round(7.4/2),score:"7.4",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",year:2016,actor:" 查内尔·克雷斯韦尔 / 尼克·迈瑞莱格伦 / 阿比盖尔·劳里 / 刘易斯·布朗 / 多米尼克·卡特 / 阿米莉亚·克拉克 / 克里斯·乔奇",background:"rgba(0,0,0,.7)",bool:false},
					{id:12,inputdata:Math.round(7.4/2),score:"7.4",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",year:2016,actor:" 查内尔·克雷斯韦尔 / 尼克·迈瑞莱格伦 / 阿比盖尔·劳里 / 刘易斯·布朗 / 多米尼克·卡特 / 阿米莉亚·克拉克 / 克里斯·乔奇",background:"rgba(0,0,0,.7)",bool:false},
					{id:13,inputdata:Math.round(7.4/2),score:"7.4",title:"公牛历险记",img:"../../../../../static/images/gnlxj.jpg",year:2016,actor:" 查内尔·克雷斯韦尔 / 尼克·迈瑞莱格伦 / 阿比盖尔·劳里 / 刘易斯·布朗 / 多米尼克·卡特 / 阿米莉亚·克拉克 / 克里斯·乔奇",background:"rgba(0,0,0,.7)",bool:false},
				],
				con:"",
			}
		},
		methods:{
			change:function(item){
				item.bool=!item.bool
				console.log(item.bool)
			},
			del:function(id){
				this.list.splice(id,1)
				console.log(id)
			}
		},
		components:{
			Bookpublic
		}
	}
</script>

<style type="text/css">
.insterested_list{padding: .1rem;display: flex;border-bottom: .01rem solid #cecece;align-items: flex-start;position: relative;}
.insterested_list .insterested_pic{width: 1rem;height: 1.5rem;box-shadow:0 0 .05rem #cecece;}
.insterested_title{margin-left: .1rem;height: 1.3rem;}
.insterested_pic .insterested_img{width: 1rem;height: 1.5rem;}
.insterested_list .insterested_pic1{width: .9rem;height: 1.2rem;box-shadow:0 0 .05rem #cecece;margin-top: .3rem;}
.insterested_pic1 .insterested_img1{width: .9rem;height: 1.2rem;}
.insterested_title .v_score{width: 1rem;}
.insterested_title h5{font-size: .16rem;}
.insterested_title .insterested_actor{font-size: .12rem;color: #9f9f9f;height: .35rem;overflow: hidden;}
.insterested_list .insterested_icon{width: .05rem;height: .15rem;}
.insterested_title h3{font-size: .12rem;border-top: .01rem solid #ddd;margin-top: .5rem;height: .3rem;line-height: .3rem;color: #474747;}
.insterested_img2 img{width: .15rem;height: .15rem;padding: .07rem;}
.insterested_img2{height: .3rem;font-size: 0;}
.insterested_title1{margin-right: .1rem;}
.insterested_list1{color: #fff;}
.insterested_title1 .insterested_actor1{color: #fff;}
.insterested_title1 h3{color: #fff;}
.insterested_icon{padding: 0 .05rem;}
.insterested_inster{font-size: .12rem;width: .6rem;height: .15rem;border: .01rem solid #000;background: #fff;text-align: center;line-height: .15rem;position: absolute;top: .1rem;right: .25rem;border-radius: .05rem;color: #000;}
</style>