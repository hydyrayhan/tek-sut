<template>
  <div class="product" v-if="product">
    <nuxt-link :to="'/product/'+product.product_id">
      <div class="product_image">
        <!-- <img src="~/assets/images/deleteImages/product.png" alt=""> -->
        <img v-if="product.images[0]" v-bind:src="$config.url+'/'+product.images[0].image" alt="">
      </div>
      <div class="product_name" v-if="product[language.name]">{{product[language.name]}}</div>
      <div class="product_rating">
        <div class="product_rating_stars" v-for="i in 5" :key="i">
          <img src="~/assets/images/icons/grayStar.svg" alt="">
        </div>
        <div class="product_rating_count">(11)</div>
      </div>
      <div class="product_prices">
        <div class="product_prices_new" v-if="product.price">{{product.price}} manat</div>
        <div class="product_prices_old" v-if="product.price_old">{{product.price_old}} manat</div>
      </div>
      <span class="isContainer">
        <div class="product_new" v-if="product.isNew">NEW</div>
        <div class="product_discount" v-if="product.discount">-{{product.discount}}%</div>
      </span>
    </nuxt-link>
    <div class="product_addBtn">
      <img src="~/assets/images/icons/addCart.svg" alt="">
      <span>
       {{$t('addCart')}}
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props:['product'],
  computed:{
     ...mapGetters({
       banner:'banner/banner',
       language: 'dynamicLang/language',
       newProducts: 'newProducts/newProducts',
    }),
  },
}
</script>

<style>

</style>