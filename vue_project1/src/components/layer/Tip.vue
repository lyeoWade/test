
<template>
	<div>
		<div class="">
			<h2 class="layer-title">{{title}}<i></i></h2>
			<div class="layer-content">
			 <p class="no-out">抱歉，暂未开放</p>
			 <p class="backBtn"><a href="javascript:;">我知道了</a></p>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name:"NotYetOpen",
		data(){
			return {
				title:"555"
			}
		},
		props:['tips'],
		methods:{
			typeIsTips(){
				console.log(this.tips)
			}
		},
		created(){
			this.typeIsTips()
		}	
	}
</script>

<style type="text/css">
	.no-out{
		color: #2ac4d2;
		margin: 60px 0 0 0;
	}
	.backBtn {
		line-height: 30px;
		width: 100%;
		text-align: center;
		margin: 54px 0 0 0;

	}
	.backBtn a{
		background: #3ac4d2;
		font-size: 12px;
		display: inline-block;
		width: 180px;
		height: 30px;
		line-height: 30px;
		color: #ffffff;
		border-radius: 4px;
	}
</style>



