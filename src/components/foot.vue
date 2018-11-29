<template>
	<div>
		<ul class="list">
			<li><router-link to='/'><i class="iconfont icon-shouye"></i><span>首页</span></router-link></li>
			<li><router-link to='/category'><i class="iconfont icon-fenlei"></i><span>分类</span></router-link></li>
			<li><router-link to='/find'><i class="iconfont icon-faxian icon"></i><span>发现</span></router-link></li>
			<li><router-link to='/cart'><i class="iconfont icon-gouwuche"></i><span>购物车</span></router-link></li>
			<li><router-link to='/mine'><i class="iconfont icon-wode"></i><span>我的</span></router-link></li>
		</ul>
	</div>
</template>
<script>
	
</script>
<style scoped>
	.list{
        display: flex;
    	display: -webkit-flex;
        justify-content: space-between;
        width:6rem;
        margin: 0 auto;
        font-size: 16px;
        align-items: center;
        -webkit-align-items: center;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        padding: 0.1rem 0;
        font-size: 0.24rem;
	}
    .list i{
        display: block;
        margin-bottom: 0.1rem;
    }
    .list span{
        display: block;
    }
    .router-link-exact-active{
        color: red;
    }
    .iconfont{
        font-size:0.5rem;
    }
</style>