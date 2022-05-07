<template>
  <div class="product_slider_res">
    <swiper
      class="swiper news__slider products products_desk"
      :options="bannerSliderOptions"
      ref="categorySwiper"
      @slideChange="onSlide"
    >
      <swiper-slide v-for="(i , index) in 10" :key="index">
        <div class="news__slider__item">
          <Product />
        </div>
      </swiper-slide>
      <div slot="button-prev" style="display:none"  class="swiper-button-prev prevv"></div>
      <div slot="button-next" style="display:none"  class="swiper-button-next nextt"></div>
    </swiper>
  </div>
</template>

<script>
import Product from '../components/Product'
export default {
  components: { Product },
  props:['left_bool','right_bool'],
  data(){
    return{
      bannerSliderOptions: {
        spaceBetween: 30,
        slidesPerView: 4,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  watch:{
    left_bool(){
      const prev = document.querySelector(".prevv");
      prev.click();
    },
    right_bool(){
      const prev = document.querySelector(".nextt");
      prev.click();
    }
  },
  mounted(){
    const prev = document.querySelectorAll(".category_header_buttons_button")[0]
    prev.style.opacity = '0.5'
  },
  methods:{
    onSlide : function () {
      const end = this.$refs.categorySwiper.$swiper.isEnd
      const start = this.$refs.categorySwiper.$swiper.isBeginning
      const prev = document.querySelectorAll(".category_header_buttons_button")[0]
      const next = document.querySelectorAll(".category_header_buttons_button")[1]
      if(end){
        next.style.opacity = '0.5'
      }else{
        next.style.opacity = '1'
      }
      if(start){
        prev.style.opacity = '0.5'
      }else{
        prev.style.opacity = '1'
      }
		}
  }
}
</script>

<style>

</style>