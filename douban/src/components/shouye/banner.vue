<template>
	<div class="swiper-container">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide s1"><img src="./banner/01.jpg"/></div>
	        <div class="swiper-slide s2"><img src="./banner/02.jpg"/></div>
	        <div class="swiper-slide s3"><img src="./banner/03.jpg"/></div>
	    </div>
	    <!-- 如果需要分页器 -->
	    <div class="swiper-pagination"></div>
	    
	    <!-- 如果需要导航按钮 -->
	    <!--<div class="swiper-button-prev"></div>-->
	    <!--<div class="swiper-button-next"></div>-->
	    
	    <!-- 如果需要滚动条 -->
	    <!--<div class="swiper-scrollbar"></div>-->
	</div>
</template>

<script type="text/javascript">
export default{
	mounted:function(){
		new Swiper ('.swiper-container', {
		    direction: 'horizontal',/*vertical*/
		    loop: true,
		    autoplay:2000,
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		    
		    // 如果需要前进后退按钮
		//  nextButton: '.swiper-button-next',
		//  prevButton: '.swiper-button-prev',
		    
		    // 如果需要滚动条
		//  scrollbar: '.swiper-scrollbar',
  })     	
	}
}
   
</script>

<style type="text/css">
	.swiper-container {
		    width:  3.75rem;
		}
	.swiper-slide{font-size: 0;}
	img{width: 3.75rem;}
	.swiper-container-horizontal>.swiper-pagination-bullets{bottom: -.1rem;}
</style>