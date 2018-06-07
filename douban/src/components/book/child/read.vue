<template>
	<div class="read">
		<Recommend></Recommend>
		<Cinema></Cinema>
		<Hotvideo></Hotvideo>
		<Toptenreviews></Toptenreviews>
		<Prevue></Prevue>
		<Bookshop></Bookshop>
		<Original></Original>
		<Channel></Channel>
		<Insterested></Insterested>
	</div>
</template>
<script type="text/javascript">
	import Recommend from "./readchild/recommend"
	import Cinema from "./readchild/cinema"
	import Hotvideo from "./readchild/hotvideo"
	import 	Toptenreviews from "./readchild/toptenreviews"
	import 	Prevue from "./readchild/prevue"
	import 	Bookshop from "./readchild/bookshop"
	import 	Original from "./readchild/original"
	import 	Channel from "./readchild/channel"
	import 	Insterested from "./readchild/insterested"
	export default{
		components:{
			Recommend,
			Cinema,
			Hotvideo,
			Toptenreviews,
			Prevue,
			Channel,
			Insterested,
			Bookshop,
			Original
		}
	}
</script>
<style type="text/css">
	.video{padding-bottom: .7rem;}
</style>