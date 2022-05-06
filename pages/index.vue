<template>
  <div class="container">
      <div class="banner">
        <swiper
          class="swiper news__slider"
          :options="bannerSliderOptions"
        >
          <swiper-slide>
            <nuxt-link to="/" class="news__slider__item"> 
                <div class="news__slider__item__image">
                  <!-- <img v-bind:src="$config.url+'/'+i.image" alt=""> -->
                  <img src="~/assets/images/deleteImages/banner.png" alt="">
                </div>
            </nuxt-link>
            </swiper-slide>
          <swiper-slide>
            <nuxt-link to="/" class="news__slider__item"> 
                <div class="news__slider__item__image">
                  <!-- <img v-bind:src="$config.url+'/'+i.image" alt=""> -->
                  <img src="~/assets/images/deleteImages/banner.png" alt="">
                </div>
            </nuxt-link>
            </swiper-slide>
            <div slot="pagination" class="swiper-pagination"></div>

            <div slot="button-prev"  class="swiper-button-prev swiper-button"></div>
            <div slot="button-next"  class="swiper-button-next swiper-button"></div>
        </swiper>
      </div>

      <div>
        <div class="category_header">
          <h2 class="category_header_name">{{$t('newProducts')}}</h2>
          <div class="category_header_buttons">
            <div class="category_header_buttons_button" @click="to_left">
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.29496 12L7.70496 10.59L3.12496 6L7.70496 1.41L6.29496 -1.23404e-07L0.294956 6L6.29496 12Z" fill="#AFAFAF"/>
              </svg>
            </div>
            <div class="category_header_buttons_button" @click="to_right">
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.70504 0L0.295044 1.41L4.87504 6L0.295044 10.59L1.70504 12L7.70504 6L1.70504 0Z" fill="#AFAFAF"/>
              </svg>
            </div>
          </div>
        </div>
        <ProductSlider :left_bool="left_bool" :right_bool="right_bool"/>
      </div>
  </div>
</template>

<script>
import ProductSlider from '../components/ProductSlider';
export default {
  components:{ProductSlider},
  data(){
    return{
      left_bool:false,
      right_bool:false,
      bannerSliderOptions: {
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 3000,
        },
      },
    }
  },
  methods:{
    to_left(){
      this.left_bool = !this.left_bool;
    },
    to_right(){
      this.right_bool = !this.right_bool;
    }
  }
}
</script>
