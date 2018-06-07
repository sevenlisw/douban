<template>
	<div  @click="change">
		<span v-show="!bool"><slot name="img"></slot></span>
		<span v-show="bool"><slot name="img1"></slot></span>
		<p :class="{ac:bool}">{{title}}</p>
	</div>
</template>

<script type="text/javascript">
	export default{
		data:function(){return {}},
		methods:{
			change:function(){
				this.$emit("transform",this.mark);
				this.$router.push("/"+this.mark)
			}
		},
		props:["title","mark","sel"],
		computed:{
			bool:function(){
				if(this.mark == this.sel){
					return true
				}else{
					return false
				}
			}
		}
	}
</script>

<style type="text/css">
	
</style>