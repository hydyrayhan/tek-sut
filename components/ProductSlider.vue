<template>
  <div class="product_slider_res">
    <swiper
      class="swiper news__slider products products_desk"
      :options="bannerSliderOptions"
      ref="categorySwiper"
      @slideChange="onSlide"
    >
      <swiper-slide v-for="(i , index) in products" :key="index">
        <div class="news__slider__item">
          <LazyProduct :product="i"/>
        </div>
      </swiper-slide>
      <div slot="button-prev" style="display:none"  class="swiper-button-prev prevv"></div>
      <div slot="button-next" style="display:none"  class="swiper-button-next nextt"></div>
    </swiper>
    <swiper
      class="swiper news__slider products products_tablet"
      :options="bannerSliderOptionsTablet"
      ref="categorySwiper"
      @slideChange="onSlide"
    >
      <swiper-slide v-for="(i , index) in products" :key="index">
        <div class="news__slider__item">
          <LazyProduct :product="i"/>
        </div>
      </swiper-slide>
      <div slot="button-prev" style="display:none"  class="swiper-button-prev prevv"></div>
      <div slot="button-next" style="display:none"  class="swiper-button-next nextt"></div>
    </swiper>

    <div class="products_mobile">
      <div class="mobile_products">
        <LazyProduct v-if="products[0]" :product="products[0]"/>
        <LazyProduct v-if="products[1]" :product="products[1]"/>
        <LazyProduct v-if="products[2]" :product="products[2]"/>
        <LazyProduct v-if="products[3]" :product="products[3]"/>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '../components/Product'
export default {
  components: { Product },
  props:['left_bool','right_bool','products'],
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
      bannerSliderOptionsTablet: {
        spaceBetween: 30,
        slidesPerView: 3,
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
    if(prev){
      prev.style.opacity = '0.5'
    }
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