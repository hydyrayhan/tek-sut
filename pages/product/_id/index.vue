<template>
  <div class="container">
    <Breadcrumb :positions="positions"/>

    <div class="productPage">
      <div class="productPage_image">
        <span class="isContainer">
          <div class="product_new" v-if="product.isNew">{{$t('new')}}</div>
          <div class="product_discount" v-if="product.discount">-{{product.discount}}%</div>
        </span>
        <div class="productPage_image_big">
          <img :src="$config.url+'/'+product.images[0].image" alt="">
        </div>
        <div class="productPage_image_small">
          <div class="productPage_image_small_image" @click="gallery(i)" v-for="(image , i) in product.images" :key="i">
            <img :src="$config.url+'/'+image.image" alt="">
          </div>
        </div>
        <div class="productPage_code">{{$t('productCode')}}: {{product.product_code}}</div>
      </div>

      <div class="productPage_image_mobile">
        <swiper
          class="swiper news__slider"
          :options="bannerSliderOptions"
        >
          <swiper-slide v-for="(image , i) in product.images" :key="i">
            <div class="news__slider__item"> 
                <div class="news__slider__item__image">
                  <img v-bind:src="$config.url+'/'+image.image" alt="" @click="gallery(i)">
                  <!-- <img src="~/assets/images/deleteImages/product.png" alt=""> -->
                </div>
            </div>
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination"></div>
        </swiper>
      </div>

      <div class="productPage_info">
        <h2 class="productPage_info_subname">{{product.brand.name}}</h2>

        <div class="productPage_info_name">
          <span id="copyText" ref="mylink">
            {{product[language.name]}}
          </span>
          <span class="copyLink" @click="copyLink(`${$config.link}/product/${product.product_id}`)">
            <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L10.58 5.42L8.99 3.83V15H7.01V3.83L5.42 5.42L4 4L8 0L12 4ZM16 9V20C16 21.1 15.1 22 14 22H2C0.89 22 0 21.1 0 20V9C0 7.89 0.89 7 2 7H5V9H2V20H14V9H11V7H14C15.1 7 16 7.89 16 9Z" fill="#8DC63F"/>
            </svg>
            <div class="copyLink_text">{{$t('copyLink')}}</div>
          </span>
          <span class="copyLink">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#8DC63F"/>
            </svg>
            <div class="copyLink_text">{{$t('copied')}}</div>
          </span>
        </div>

        <span class="for_mobile_res">
          <div class="productPage_info_priceRate">
            <div class="productPage_info_priceRate_price">
              <div class="productPage_info_priceRate_price_new" v-if="product.price">{{product.price}} manat</div>
              <div class="productPage_info_priceRate_price_old" v-if="product.price_old">{{product.price_old}} manat</div>
            </div>
            <div class="productPage_info_priceRate_rate">
              <div class="productPage_info_priceRate_rate_stars">

                <span style="display:flex" v-if="calculateRate(product.rating,product.rating_count) > 0">
                  <div class="productPage_info_priceRate_rate_stars_star" v-for="(i , index) in calculateRate(product.rating,product.rating_count)" :key="index+10">
                    <img src="~/assets/images/icons/goldStar.svg" alt="">
                  </div>
                </span>
                
                <div class="productPage_info_priceRate_rate_stars_star" v-for="i in 5-calculateRate(product.rating,product.rating_count)" :key="i">
                  <img src="~/assets/images/icons/grayStar.svg" alt="">
                </div>
                  
              </div>
              <div class="productPage_info_priceRate_rate_count">({{product.rating_count}})</div>
            </div>
          </div>

          <div class="productPage_info_quantity">
            <div class="productPage_info_quantity_title">{{$t('quantity')}}</div>
            <div class="productPage_info_quantity_btn" @click="removeProduct"><img src="~/assets/images/icons/minus.svg" alt="minus"></div>
            <div class="productPage_info_quantity_quantity">{{productCount}}</div>
            <div class="productPage_info_quantity_btn" @click="addProduct"><img src="~/assets/images/icons/plus.svg" alt="plus"></div>
          </div>
        </span>

        <div class="productPage_info_buyBtns">
          <div class="productPage_info_buyBtns_btn" style="cursor:pointer" @click="addToCart">
            <img v-if="!productCount" src="~/assets/images/icons/addCart.svg" alt="" >
            <span  v-if="!productCount">{{$t('addCart')}}</span>
            <span v-if="productCount">{{$t('addedCart')}}</span>
          </div>
          <div class="productPage_info_buyBtns_btn" @click="buyOneClick">{{$t('buyOneClick')}}</div>
        </div>

        <div class="productPage_info_description" v-html="product[language.body]">
        </div>

        <div class="productPage_info_rate">
          <div class="productPage_info_rate_stars">
            <span style="display:flex" v-if="this.ratedValue">
              <div class="productPage_info_rate_stars_star" v-for="i in this.ratedValue" :key="i+10">
                <img src="~/assets/images/icons/goldStar.svg" alt="">
              </div>
            </span>
            <div class="productPage_info_rate_stars_star bottomRateStars" v-for="i in 5-this.ratedValue" :key="i">
              <img src="~/assets/images/icons/grayStar.svg" alt="" @click="rateStar(i)">
            </div>
          </div>
          <div class="productPage_info_rate_submitBtn" v-if="!ratedValue" @click="submitRate">{{$t('submitRate')}}</div>
        </div>
      </div>
    </div>
    <div class="related" v-if="recommenendations[0].products.length>0">
      <div class="category_header">
        <h2 class="category_header_name">{{$t('related')}}</h2>
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
      <LazyProductSlider :left_bool="left_bool" :right_bool="right_bool" :products="recommenendations[0].products"/>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';
import ProductSlider from '~/components/ProductSlider.vue';
import { mapGetters, mapActions } from 'vuex'
export default {
  components: { Breadcrumb, ProductSlider },
  data(){
    return{
      left_bool:false,
      right_bool:false,
      body_tm:'',
      ratedValue:false,
      rated:false,
      productCount:0,
      positions:{
        category:{
          name:{
            tm:"",
            ru:""
          },
          id:"1",
          to:"/"
        },
        subcategory_name:{
          tm:'',
          ru:''
        },
      },
      bannerSliderOptions: {
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 3000,
        },
      },
    }
  },
  async asyncData({ $axios, route }) {
    try {
      const productId = route.params.id;
      let { data } = await $axios.get(`/public/products/${productId}`);
      const {oneProduct} = data;
      const {recommenendations} = data;
      const  product  = oneProduct;
      return { product, recommenendations }
    } catch (err) {
      console.log(err)
    }
  },
  async mounted(){
    this.gallery(0);
    this.positions.category.name.tm = this.product.category.name_tm
    this.positions.category.name.ru = this.product.category.name_ru
    this.positions.category.to = '/category/'+this.product.category.category_id
    if(this.product.subcategory){
      this.positions.subcategory_name.tm = this.product.subcategory.name_tm
      this.positions.subcategory_name.ru = this.product.subcategory.name_ru
    }else{
      this.positions.subcategory_name = null
    }
    this.setProductCount()
  },
  computed:{
     ...mapGetters({
       language: 'dynamicLang/language',
       cartProducts : 'cart/cartProducts',
       ratedProducts : 'cart/ratedProducts',
    }),
    cartProducts(){
      return this.$store.getters['cart/cartProducts']
    }
  },
  methods:{
    to_left(){
      this.left_bool = !this.left_bool;
    },
    to_right(){
      this.right_bool = !this.right_bool;
    },
    copyLink(mytext){
      navigator.clipboard.writeText(mytext);

      const copy = document.querySelectorAll(".copyLink");
      copy[0].style.display = 'none';
      copy[1].style.display = 'block';
      const stop = setInterval(function(){
        copy[0].style.display = 'block';
        copy[1].style.display = 'none';

        clearInterval(stop);
      },3000)
    },
    buyOneClick(){
      this.$router.push('/order');
    },
    gallery(id){
      const images = document.querySelectorAll('.productPage_image_small_image');
      for(let i =0; i<images.length; i++){
        images[i].classList.remove('active');
      }
      images[id].classList.add('active')

      const big = document.querySelector('.productPage_image_big img');
      const newImage = this.$config.url+'/'+this.product.images[id].image;
      big.setAttribute('src',newImage)
    },
    rateStar(id){
      const stars = document.querySelectorAll('.bottomRateStars img')
      if(!this.ratedValue){
        for(let i =0; i<id; i++){
          const image = require('~/assets/images/icons/goldStar.svg')
          stars[i].setAttribute('src',image)
        }
        this.rated = id;
      }
    },
    async submitRate(){
      if(!this.ratedValue){
        try {
          const {data} = await this.$axios.post(`public/products/set-rating/${this.$route.params.id}`,{rating:this.rated})        
          this.product.rating = data.product.rating
          this.product.rating_count = data.product.rating_count
          if(data){
            this.setRate({id:this.$route.params.id,rate:this.rated});
            document.querySelector(".productPage_info_rate_submitBtn").style.display = 'none';
            this.$toast.success(this.$t('rated'))
          }
        } catch (error) {
          console.log(error)
        }
      }
    },
    calculateRate(rate){
      return Math.round(rate) || 0
    },
    setProductCount(){
      this.productCount = this.$productCount(this.product);
      for(let i = 0; i<this.ratedProducts.length; i++){
        if(this.ratedProducts[i].id === this.$route.params.id){
          this.ratedValue = this.ratedProducts[i].rate;
          break
        }
      }
    },
    ...mapActions({
      setProductToCart : 'cart/setProductToCart',
      addProductCount : 'cart/addProductCount',
      removeProductCount : 'cart/removeProductCount',
      deleteProduct : 'cart/deleteProduct',
      setRate : 'cart/setRate',
    }),
    addToCart(){
      if(this.productCount === 0){
        this.setProductToCart(this.product);
        this.productCount+=1;
      }else{
        this.deleteProduct(this.product.product_id)
      }
    },
    addProduct(){
      if(this.productCount === 0){
        this.setProductToCart(this.product);
        this.productCount+=1;
      }else{
        this.addProductCount(this.product.product_id);
        this.productCount+=1;
      }
    },
    removeProduct(){
      this.removeProductCount(this.product.product_id);
      this.productCount-=1;
    },
  },
  watch:{
    cartProducts(){
      this.setProductCount()
    }
  },
}
</script>

<style>

</style>