<template>
  <div class="product">
    <nuxt-link to="/">
      <div class="product_image"><img src="~/assets/images/deleteImages/product.png" alt=""></div>
      <div class="product_name">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, doloribus?</div>
      <div class="product_rating">
        <div class="product_rating_stars" v-for="i in 5" :key="i">
          <img src="~/assets/images/icons/grayStar.svg" alt="">
        </div>
        <div class="product_rating_count">(11)</div>
      </div>
      <div class="product_prices">
        <div class="product_prices_new">118.00 manat</div>
        <div class="product_prices_old">200.00 manat</div>
      </div>
      <div class="product_new">NEW</div>
      <div class="product_discount">-15%</div>
    </nuxt-link>
    <div class="product_addBtn">
      <img src="~/assets/images/icons/addCart.svg" alt="">
      {{$t('addCart')}}
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>