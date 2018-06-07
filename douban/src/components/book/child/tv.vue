<template>
	<div class="tv">
		<Domestic></Domestic>
		<Hottv></Hottv>
		<Americandrama></Americandrama>
		<Japandrama></Japandrama>
		<Prevue></Prevue>
		<Tvchannel></Tvchannel>
		<Insterested></Insterested>
	</div>
</template>
<script type="text/javascript">
	import Domestic from "./tvchild/domestic"
	import Hottv from "./tvchild/hottv"
	import Americandrama from "./tvchild/americandrama"
	import 	Japandrama from "./tvchild/japandrama"
	import 	Prevue from "./tvchild/prevue"
	import 	Tvchannel from "./tvchild/tvchannel"
	import 	Insterested from "./tvchild/insterested"
	export default{
		components:{
			Domestic,
			Hottv,
			Americandrama,
			Japandrama,
			Prevue,
			Tvchannel,
			Insterested
		}
	}
</script>
<style type="text/css">
	.video{padding-bottom: .7rem;}
</style>