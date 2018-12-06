<template>
	<div>
		<div class="head around">	
			<span class="hed-img"><img src="@/assets/images/head.png" alt=""></span>
			<input type="text" value="" placeholder="请输入相关内容" class="hed-input">
			<span>登录</span>
		</div>
		<div class="empty"></div>
	</div>
</template>
<script>
	export default{

	}
</script>
<style>
	.head{
		padding: 0.2rem 0;
		position: fixed;
		left: 0;
		right: 0;
		z-index: 2;
		background: white;
	}
	.hed-img{
	    width: 1.3rem;
    	height: 0.3rem;
	}
	.hed-img img{
		width: 100%;
		height: 100%;
	}
	.hed-input{
		height: 0.5rem;
	    border: 1px solid #ccc;
	    padding-left: 0.1rem;
	    border-radius: 5px;
	}
	.empty{
		height: 0.94rem;
	}
</style>