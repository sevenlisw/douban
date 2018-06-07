<template>
	<div class="video">
		<Recommend></Recommend>
		<Cinema></Cinema>
		<Upcoming></Upcoming>
		<Hotvideo></Hotvideo>
		<Toptenreviews></Toptenreviews>
		<Prevue></Prevue>
		<Channel></Channel>
		<Insterested></Insterested>
	</div>
</template>
<script type="text/javascript">
	import Recommend from "./videochild/recommend"
	import Cinema from "./videochild/cinema"
	import Upcoming from "./videochild/upcoming_movies"
	import Hotvideo from "./videochild/hotvideo"
	import 	Toptenreviews from "./videochild/toptenreviews"
	import 	Prevue from "./videochild/prevue"
	import 	Channel from "./videochild/channel"
	import 	Insterested from "./videochild/insterested"
	export default{
		components:{
			Recommend,
			Cinema,
			Upcoming,
			Hotvideo,
			Toptenreviews,
			Prevue,
			Channel,
			Insterested
		}
	}
</script>
<style type="text/css">
	.video{padding-bottom: .7rem;}
</style>