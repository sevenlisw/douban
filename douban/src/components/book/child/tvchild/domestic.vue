<template>
	<div class="popdomestic">
		<ul class="recommmend_movie">
			<li class="recommmend_text">
				<img src="../../../../../static/images/icon_03.png"/>
				<div>
					<p class="blod">找电视</p>
					<p class="normal">日剧/英剧/美剧</p>
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
	</div>
	
</template>

<script type="text/javascript">
	export default{
		data:function(){
			return {
				
			}
		}
	}
</script>

<style type="text/css">
	.popdomestic{font-size: 0;box-sizing: border-box;width: 100%;}
	.popdomestic>.recommmend_movie{width: 3.75rem;border-top: .01rem solid #e1e1e1;border-bottom: .01rem solid #e1e1e1;height: .7rem;display: flex;}
	.recommmend_movie li{font-size: 0;display: flex;margin: .2rem 0;}
	.recommmend_movie li img{width: .35rem;height: .35rem;padding:0 .1rem}
	.recommmend_movie li p{font-size: .12rem;height: .2rem;line-height: .2rem;text-align: left;}
	.recommmend_movie .recommmend_text{padding-right:.4rem ;border-right: .01rem solid #e1e1e1;height: .4rem;}
	.recommmend_movie li .normal{color: #a0a0a0;}
</style>