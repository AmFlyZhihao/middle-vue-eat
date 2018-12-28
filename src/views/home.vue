<template>
	<div>
		<div class="swiper-container swiper-container01">
		    <div class="swiper-wrapper">
		      <div class="swiper-slide"><img src="https://res.vmallres.com/pimages//sale/2018-11/YrrOwsSRs0htaIUx0lLo.jpg"></div>
		      <div class="swiper-slide"><img src="https://res.vmallres.com/pimages//sale/2018-11/YrrOwsSRs0htaIUx0lLo.jpg"></div>
		      <div class="swiper-slide"><img src="https://res.vmallres.com/pimages//sale/2018-11/YrrOwsSRs0htaIUx0lLo.jpg"></div>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination swiper-pagination01"></div>
  		</div>
		<!--小菜单-->
		 <div class="swiper-container swiper-container02">
		    <div class="swiper-wrapper">
		      <div class="swiper-slide">
		      	<img src="@/assets/images/ygm.png" alt="">
				<span>优享购</span>
		      </div>
		      <div class="swiper-slide">
		      	<img src="@/assets/images/yqyl.png" alt="">
		      	<span>邀请有礼</span>
		      </div>
		      <div class="swiper-slide">
		      	<img src="@/assets/images/hylq.png" alt="">
		      	<span>会员领券</span>
		      </div>
		      <div class="swiper-slide">
		      	<img src="@/assets/images/yxg.png" alt="">
		      	<span>以旧换新</span>
		      </div>
		      <div class="swiper-slide">
		      	<img src="@/assets/images/yjhx.png" alt="">
		      	<span>优购码</span>
		      </div>
		      <div class="swiper-slide">
		      	<img src="@/assets/images/yxg.png" alt="">
		      	<span>优享购</span>
		      </div>
		    </div>
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
		created(){
			this.axios({
				method:'get',
				url:'/api/data',

			}).then(response=>{
				console.log(response)
			})


			this.axios({
				method:'post',
				url:'/api/data2',

			}).then(response=>{
				console.log(response)
			})
		},
		mounted(){
			let mySwiper = new Swiper('.swiper-container01', {
			    loop: true, // 循环模式选项
			    pagination: {
			      el: '.swiper-pagination01',
			      clickable: true,
			    },
			    // autoplay : true,
			    // speed:500,
			     autoplay: {
    				delay: 3000,//1秒切换一次
    				disableOnInteraction: false,
  				},
			      autoplayDisableOnInteraction : false,
			        observer:true,
    				observeParents:true,//修改swiper的父元素时，自动初始化swiper
			})

			//小菜单
			 let swiper = new Swiper('.swiper-container02', {
			      slidesPerView: 5,
			      spaceBetween: 20,
			      // init: false,
			      pagination: {
			        el: '.swiper-pagination02',
			        clickable: true,
			      },
    		});
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
	width: 100%;
	height: 100%;
}
/*.swiper-container02 .swiper-slide{
	border: 1px solid red;
}*/
.swiper-container02 .swiper-slide span{
	display: block;
	text-align: center;
	color:#9B9B9B;
	font-size:0.24rem;
}
</style>
