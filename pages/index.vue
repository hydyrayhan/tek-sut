<template>
  <div class="container">
      <div class="banner">
        <swiper
          class="swiper news__slider"
          :options="bannerSliderOptions"
        >
          <swiper-slide v-for="(item, i) in banner" :key="i">
            <a :href="item.link" class="news__slider__item" > 
                <div class="news__slider__item__image">
                  <img v-bind:src="$config.url+'/'+item[language.image]" :alt="item[language.image]">
                </div>
            </a>
            </swiper-slide>
            <div slot="pagination" class="swiper-pagination"></div>

            <div slot="button-prev"  class="swiper-button-prev swiper-button"></div>
            <div slot="button-next"  class="swiper-button-next swiper-button"></div>
        </swiper>
      </div>
      <div>
        <div class="category_header" v-if="newProducts.length>0">
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
          <nuxt-link to="/category/newAndAksiya?subcategory=new" class="category_header_mobile_button">
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.70504 0L0.295044 1.41L4.87504 6L0.295044 10.59L1.70504 12L7.70504 6L1.70504 0Z" fill="#AFAFAF"/>
            </svg>
          </nuxt-link>
        </div>
        <LazyProductSlider :left_bool="left_bool" :right_bool="right_bool" :products="newProducts"/>
      </div>
      <div style="margin-bottom:100px">
        <div class="category_header" v-if="discounts.length>0">
          <h2 class="category_header_name">{{$t('discountProducts')}}</h2>
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
          <nuxt-link to="/category/newAndAksiya?subcategory=discount" class="category_header_mobile_button">
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.70504 0L0.295044 1.41L4.87504 6L0.295044 10.59L1.70504 12L7.70504 6L1.70504 0Z" fill="#AFAFAF"/>
            </svg>
          </nuxt-link>
        </div>
        <LazyProductSlider :left_bool="left_bool" :right_bool="right_bool" :products="discounts"/>
      </div>
  </div>
</template>

<script>
import ProductSlider from '../components/ProductSlider';
import { mapGetters } from 'vuex'
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
  computed:{
     ...mapGetters({
       banner:'banner/banner',
       language: 'dynamicLang/language',
       newProducts: 'newProducts/newProducts',
       discounts: 'discountProducts/discountProducts',
    }),
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
