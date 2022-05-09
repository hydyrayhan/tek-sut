<template>
  <div class="container">
    <Breadcrumb :positions="positions"/>

    <div class="productPage">
      <div class="productPage_image">
        <div class="productPage_image_new">{{$t('new')}}</div>
        <div class="productPage_image_discount">-16%</div>
        <div class="productPage_image_big"><img src="~/assets/images/deleteImages/product.png" alt=""></div>
        <div class="productPage_image_small">
          <div class="productPage_image_small_image active">
            <img src="~/assets/images/deleteImages/product.png" alt="">
          </div>
          <div class="productPage_image_small_image">
            <img src="~/assets/images/deleteImages/product2.png" alt="">
          </div>
          <div class="productPage_image_small_image">
            <img src="~/assets/images/deleteImages/product3.png" alt="">
          </div>
          <div class="productPage_image_small_image">
            <img src="~/assets/images/deleteImages/product4.png" alt="">
          </div>
        </div>
        <div class="productPage_code">{{$t('productCode')}}: ST7758</div>
      </div>

      <div class="productPage_info">
        <h2 class="productPage_info_subname">Fruits</h2>

        <div class="productPage_info_name">
          <span id="copyText" ref="mylink">
            Almaly çizkeýk tagamly sufle "Attache"500 gr (±15 gr) 
          </span>
          <span class="copyLink" @click="copyLink('Almaly çizkeýk tagamly sufle `Attache`500 gr (±15 gr)')">
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

        <div class="productPage_info_priceRate">
          <div class="productPage_info_priceRate_price">
            <div class="productPage_info_priceRate_price_new">8.00 manat</div>
            <div class="productPage_info_priceRate_price_old">12.00 manat</div>
          </div>
          <div class="productPage_info_priceRate_rate">
            <div class="productPage_info_priceRate_rate_stars">
              <div class="productPage_info_priceRate_rate_stars_star" v-for="i in 5" :key="i">
                <img src="~/assets/images/icons/grayStar.svg" alt="">
              </div>
            </div>
            <div class="productPage_info_priceRate_rate_count">(11)</div>
          </div>
        </div>

        <div class="productPage_info_quantity">
          <div class="productPage_info_quantity_title">{{$t('quantity')}}</div>
          <div class="productPage_info_quantity_btn"><img src="~/assets/images/icons/minus.svg" alt="minus"></div>
          <div class="productPage_info_quantity_quantity">1</div>
          <div class="productPage_info_quantity_btn"><img src="~/assets/images/icons/plus.svg" alt="plus"></div>
        </div>

        <div class="productPage_info_buyBtns">
          <div class="productPage_info_buyBtns_btn"><img src="~/assets/images/icons/addCart.svg" alt="">{{$t('addCart')}}</div>
          <div class="productPage_info_buyBtns_btn">{{$t('buyOneClick')}}</div>
        </div>

        <div class="productPage_info_description">Almaly çizkeýk tagamly sufle "Attache"500 gr (±15 gr) Almaly çizkeýk tagamly sufle
          "Attache"500 gr (±15 gr) Almaly çizkeýk tagamly sufle "Attache"500 gr (±15 gr) Almaly
          çizkeýk tagamly sufle "Attache"500 gr (±15 gr) Almaly çizkeýk tagamly sufle "Attache"50
          gr (±15 gr) Almaly çizkeýk tagamly sufle "Attache"500 gr (±15 gr) Almaly çizkeýk tagamly
          sufle "Attache"500 gr (±15 gr)
          Almaly çizkeýk tagamly sufle
        </div>

        <div class="productPage_info_rate">
          <div class="productPage_info_rate_stars">
            <div class="productPage_info_rate_stars_star" v-for="i in 5" :key="i">
              <img src="~/assets/images/icons/grayStar.svg" alt="">
            </div>
          </div>
          <div class="productPage_info_rate_submitBtn">{{$t('submitRate')}}</div>
        </div>
      </div>
    </div>

    <div class="related">
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
      <ProductSlider :left_bool="left_bool" :right_bool="right_bool"/>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';
import ProductSlider from '~/components/ProductSlider.vue';
export default {
  components: { Breadcrumb, ProductSlider },
  data(){
    return{
      left_bool:false,
      right_bool:false,
      positions:{
        category:{
          name:"Grocery",
          id:"1",
          to:"/"
        },
        subcategory_name:'Fruits',
      }
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
      let time = true;
      const copy = document.querySelectorAll(".copyLink");
      copy[0].style.display = 'none';
      copy[1].style.display = 'block';
      const stop = setInterval(function(){
        copy[0].style.display = 'block';
        copy[1].style.display = 'none';

        clearInterval(stop);
      },3000)
    }
  }
}
</script>

<style>

</style>