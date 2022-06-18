<template>
  <div class="product" v-if="product">
    <nuxt-link :to="'/product/'+product.product_id">
      <div class="product_image">
        <!-- <img src="~/assets/images/deleteImages/product.png" alt=""> -->
        <img v-if="product.images[0]" v-bind:src="$config.url+'/'+product.images[0].image" alt="">
      </div>
      <div class="product_name" v-if="product[language.name]">{{product[language.name]}}</div>
      <div class="product_rating">
        <span style="display:flex" v-if="calculateRate(product.rating,product.rating_count) > 0">
          <div class="product_rating_stars" v-for="(i , index) in calculateRate(product.rating,product.rating_count)" :key="index+10">
            <img src="~/assets/images/icons/goldStar.svg" alt="">
          </div>
        </span>
        <div class="product_rating_stars" v-for="i in 5-calculateRate(product.rating,product.rating_count)" :key="i">
          <img src="~/assets/images/icons/grayStar.svg" alt="">
        </div>
        <div class="product_rating_count">({{product.rating_count}})</div>
      </div>
      <div class="product_prices">
        <div class="product_prices_new"  v-if="product.price">{{product.price}} manat</div>
        <div style="width:10px; height:16px" v-if="!product.price_old"></div>
        <div class="product_prices_old" v-if="product.price_old">{{product.price_old}} manat</div>
      </div>
      <span class="isContainer">
        <div class="product_new" v-if="product.isNew">NEW</div>
        <div class="product_discount" v-if="product.discount">-{{product.discount}}%</div>
      </span>
    </nuxt-link>
    <div class="product_addBtn_container">
      <div class="product_addBtn" v-if="whileing" @click="addProduct()">
        <img v-if="!productCount" class="desktop" src="~/assets/images/icons/addCart.svg" alt="">
        <img class="mobile"  @click="sebetClicked(productCount)" src="~/assets/images/icons/addCart.svg" alt="">
        <span v-if="!productCount">
        {{$t('addCart')}}
        </span>
        <span v-if="productCount">{{$t('addedCart')}}</span>
      </div>
      <div v-else class="openMobileClick">
        <div>
          <img src="~/assets/images/icons/tick.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  props:['product'],
  data(){
    return{
      productCount : 0,
      whileing : true,
    }
  },
  computed:{
     ...mapGetters({
       banner:'banner/banner',
       language: 'dynamicLang/language',
       newProducts: 'newProducts/newProducts',
       cartProducts : 'cart/cartProducts',
    }),
    cartProducts(){
      return this.$store.getters['cart/cartProducts']
    }
  },
  methods:{
    calculateRate(rate){
      return Math.round(rate) || 0
    },
    setProductCount(){
      this.productCount = this.$productCount(this.product);
    },
    ...mapActions({
      setProductToCart : 'cart/setProductToCart',
      addProductCount : 'cart/addProductCount',
      removeProductCount : 'cart/removeProductCount',
      deleteProduct : 'cart/deleteProduct',
    }),
    addProduct(){
      const height = window.innerWidth;
      if(height> 1000){
        if(this.productCount === 0){
          this.setProductToCart(this.product);
          this.productCount+=1;
        }else{
          this.deleteProduct(this.product.product_id)
          this.productCount = 0
        }
      }else{
        this.sebetClicked()
      }
    },
    sebetClicked(){
      this.setProductToCart(this.product)
      this.whileing = false
      const stop = setInterval(() => {
        this.whileing = true
        clearInterval(stop)
      }, 1000);
    },
  },
  
  watch:{
    cartProducts(){
      this.setProductCount()
    }
  },
  mounted(){
    this.setProductCount()
  },
}
</script>

<style>

</style>