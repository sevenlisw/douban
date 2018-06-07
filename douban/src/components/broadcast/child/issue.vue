<template>
	<div class="wrap1">
	    <form>
	        <textarea id="txt" placeholder="分享生活的点滴..." @keyup="tet"></textarea>
	        <button class="commonBtn" id="commonBtn" disabled type="button" @click="publish"><img src="../../../../static/images/ic_status_send_text.png"/></button>
	        <button class="commonBtn" id="commonBtn" disabled type="button"><img src="../../../../static/images/ic_status_send_pic.png"/></button>
	    </form>
	    <ul class="talkList" id="talkList">
	        <li>
	        	<div class="talkList_information">
	        		<img src="../../../../static/images/ic_user_info_birthday.png" alt="" class="talkList_via"/>
	        		<div class="talkList_text">
	        			<p>木子</p>
	        			<p>想听</p>
	        		</div>
	        		<time></time>
	        		<img src="../../../../static/images/ic_more_action_overflow.png" class="talkList_move"/>
	        	</div>
	            <p class="talkList_cont">adsfa asdf asdf asdf</p>
	            <div class="toolsBar">
	                <span class="span1"><img src="../../../../static/images/ic_like.png" @click="add"/> <b>{{num}}</b></span>
	                <span class="span2"><img src="../../../../static/images/ic_review.png" /> <b>{{num1}}</b></span>
	                <span class="span3"><img src="../../../../static/images/ic_retweet_normal.png" />  <b>{{num2}}</b></span>
	            </div>
	        </li>
	    </ul>
	</div>
</template>

<script type="text/javascript">
	export default{
		data:function(){
			return {
				num:0,
				num1:0,
				num2:0,
			}
		},
		methods:{
			tet:function(){
				var oTxt = document.getElementById("txt");
				var commonBtn = document.getElementById("commonBtn");
				var num = 0;
				var str = oTxt.value;
				commonBtn.disabled= str.length>=1? false : true;
				console.log(str);
			},
			publish:function(){
				var talkList = document.getElementById("talkList")
				var commonBtn = document.getElementById("commonBtn");
				var oTxt = document.getElementById("txt");
				var myTime = new Date();
				var oLi = document.createElement('li');
				oLi.innerHTML = `
					<div class="talkList_information">
	        		<img src="../../../../static/images/ic_user_info_birthday.png" alt="" class="talkList_via"/>
	        		<div class="talkList_text">
	        			<p>木子</p>
	        			<p>想听</p>
	        		</div>
	        		<time>${myTime.toLocaleString()}</time>
	        		<img src="../../../../static/images/ic_more_action_overflow.png" class="talkList_move"/>
	        	</div>
	            <p class="talkList_cont">${oTxt.value}</p>
	            <div class="toolsBar">
	                <span class="span1"><img src="../../../../static/images/ic_like.png" @click="add"/> <b>${this.num}</b></span>
	                <span class="span2"><img src="../../../../static/images/ic_review.png"/> <b>0</b></span>
	                <span class="span3"><img src="../../../../static/images/ic_retweet_normal.png"/>  <b>0</b></span>
	            </div>
				`
		        talkList.insertBefore(oLi,talkList.firstElementChild)
		        oTxt.value = '';
		        commonBtn.disabled= true;
		        console.log( oTxt.value)
			},
			add:function(){
				var b = document.getElementsByTagName("b")[0]
				this.num++
				b.disabled= this.num == 1? false : true;
			}
		}
			
	}
</script>

<style type="text/css">
	#txt{width: 2.5rem;text-align: left;border: none;height: .4rem;line-height: .4rem;padding-left: .1rem;}
	#txt::-webkit-input-placeholder{height: .4rem;line-height: .4rem;}
	.commonBtn{border: none;background: #fff;}
	.commonBtn img{width: .3rem;padding-right: .1rem;}
	.toolsBar{display: flex;justify-content: space-around;border-top: .01rem solid #ddd;padding: .1rem 0;font-size: .16rem;color: #C6C6C6;}
	.toolsBar span{display: flex;align-items: center;}
	.toolsBar span img{width: .3rem;}
	form{display: flex;align-items: center;justify-content: space-around;background: #fff;}
	.talkList_via{width: .4rem;height: .4rem;}
	.talkList_information{display: flex;padding: .1rem;align-items: center;padding: .1rem;}
	.talkList_move{width: .15rem;height: .05rem;}
	.wrap1{width: 3.75rem;margin: 0 auto;font-size: 0;text-align: center;background: #ddd;}
	.talkList_text{padding: 0 0 0 .1rem;}
	.talkList_text p{height: .2rem;font-size: .14rem;line-height: .2rem;width: 2rem;text-align: left;}
	.talkList_text p:nth-child(2){font-size: .12rem;color: #C6C6C6;}
	.talkList_cont{text-align: left;padding: .1rem;font-size: .16rem;}
	.talkList li{background: #fff;margin: .1rem 0;}
	time{font-size: .12rem;width: 1rem;}
</style>