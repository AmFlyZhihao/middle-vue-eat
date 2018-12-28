<template>
	<div>
		<span>我是分类页面</span>
		<test :demoParam='demoParam2'></test>
	</div>
</template>
<script>
	import test from '@/components/test';
	export default{
		data(){
			return{
				demoParam2:{
					key:"我是要测试组件啊!"
				}
			}
			
		},
		components:{
				"test":test
			}
	}
</script>
