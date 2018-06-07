<template>
  <div id="app">
 <!--   <img src="./assets/logo.png">-->
 	<Tabbarp></Tabbarp>
    <router-view/>
    
  </div>
</template>

<script>
import Tabbarp from "./components/tabbarParent"
export default {
  name: 'App',
  components:{
  	Tabbarp
  },
  created:function(){
  	this.$router.push("/shouye")
  }
};
let html = document.getElementsByTagName("html")[0]
	function fontSize(){
		let w = document.documentElement.clientWidth
		html.style.fontSize = w/3.75 + 'px'
	}
	fontSize()
	window.onresize = fontSize
</script>

<style>
*{margin: 0;padding: 0;}
input{border: none;}
html{font-size: 100px;}
ul{list-style: none;}
</style>
