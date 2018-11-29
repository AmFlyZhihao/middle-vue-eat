<template>
	<div>
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		      <div class="swiper-slide"><img src="https://res.vmallres.com/pimages//sale/2018-11/YrrOwsSRs0htaIUx0lLo.jpg"></div>
		      <div class="swiper-slide"><img src="https://res.vmallres.com/pimages//sale/2018-11/YrrOwsSRs0htaIUx0lLo.jpg"></div>
		      <div class="swiper-slide"><img src="https://res.vmallres.com/pimages//sale/2018-11/YrrOwsSRs0htaIUx0lLo.jpg"></div>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>
		    <!-- 如果需要导航按钮 -->
		   <!--  <div class="swiper-button-prev"></div>
		    <div class="swiper-button-next"></div> -->
  		</div>

	</div>

</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
	export default{
		data(){
			return{
				

			}
		},
		mounted(){
			let mySwiper = new Swiper('.swiper-container', {
				// direction: 'vertical', // 垂直切换选项
			    loop: true, // 循环模式选项
			    
			    // 如果需要分页器
			    pagination: {
			      el: '.swiper-pagination',
			    },
			    
			    // 如果需要前进后退按钮
			    navigation: {
			      nextEl: '.swiper-button-next',
			      prevEl: '.swiper-button-prev',
			    },
			    
			    // 如果需要滚动条
			    scrollbar: {
			      el: '.swiper-scrollbar',
			    },
			})
		},
		methods:{

		},
		
	}
</script>
<style scoped>
	.swiper-container {
  width: 100%;
  height:100%;
}
.swiper-slide img{
	width: 100%
}
</style>
