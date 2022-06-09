<template>
  <div class="container">
    <Breadcrumb :positions="positions"/>

    <div class="cartPage">
      <!-- <div class="cartPage_items noItem_mobile"> -->
      <div class="cartPage_items">
        <div class="cartPage_items_title">{{$t('cartItems')}}</div>
        
        <span v-if="cartProducts.length>0">
          <div class="cartPage_items_item" v-for="(product , i) in cartProducts" :key="i">
            <div class="cartPage_items_item_image">
              <!-- <img src="~/assets/images/deleteImages/product.png" alt=""> -->
              <img v-if="product.images[0]" v-bind:src="$config.url+'/'+product.images[0].image" alt="">
            </div>

            <span class="mobileRes">
              <div class="cartPage_items_item_title">
                <div class="cartPage_items_item_title_subName">{{product[language.name]}}</div>
                <div class="cartPage_items_item_title_name" v-html="product[language.body]"></div>
              </div>
  
              <span class="mobileRes_inside">
                <div class="cartPage_items_item_quantity">
                  <div class="cartPage_items_item_quantity_btn" @click="removeProductCount(product.product_id)"><img src="~/assets/images/icons/minus.svg" alt="minus"></div>
                  <div class="cartPage_items_item_quantity_quantity">{{product.count}}</div>
                  <div class="cartPage_items_item_quantity_btn" @click="addProductCount(product.product_id)"><img src="~/assets/images/icons/plus.svg" alt="plus"></div>
                </div>

                <div class="cartPage_items_item_prices">
                  <div class="cartPage_items_item_prices_old">{{calculatePrice(product.price_old,product.count)}} manat</div>
                  <div class="cartPage_items_item_prices_new">{{calculatePrice(product.price,product.count)}} manat</div>
                </div>
              </span>
            </span>

            <div class="cartPage_items_item_delete" @click="deleteProductFromCart(product.product_id)"><img src="~/assets/images/icons/delete.svg" alt="delete"></div>
          </div>
        </span>

        <div class="cartPage_items_noItem" v-else>
          <img src="~/assets/images/icons/startShopping.svg" alt="">
          <div class="empty">{{$t('cartEmpty')}}</div>
          <nuxt-link to="/" class="startShopping" >{{$t('startShopping')}}</nuxt-link>
        </div>
        
        <div class="mobile_totalPrice">
          <span> 
            <div class="totalPrice_title">{{$t('totalProducts')}}</div>
            <div class="totalPrice_price">{{totalCost}} manat</div>
          </span>
        </div>
      </div>

      <div class="cartPage_myCart">
        <div class="cartPage_myCart_title">{{$t('myCart')}}</div>
        <div class="cartPage_myCart_totalPrice">
          <div class="cartPage_myCart_totalPrice_title">{{$t('totalProducts')}}:</div>
          <div class="cartPage_myCart_totalPrice_price">{{totalCost}} manat</div>
        </div>
        <button class="cartPage_myCart_btn" @click="$router.push('order')">{{$t('continue')}}</button>
      </div>
    </div>
    <nuxt-link to="/order" class="mobile_continueBtn">{{$t('continue')}}</nuxt-link>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';
import { mapGetters, mapActions } from 'vuex'
export default {
  components: { Breadcrumb },
  data(){
    return{
      positions:{
        category:{
          name:{
            tm:"Sebet",
            ru:"Корзина",
          },
          id:"1",
          to:"/cart"
        },
      }
    }
  },
  computed: {
    ...mapGetters({
      language: 'dynamicLang/language',
      cartProducts: 'cart/cartProducts',
      totalCost: 'cart/totalCost',
    }),
  },
  mounted(){
    const width = window.innerWidth
    if(width > 1000){
      const element = document.querySelector('.cartPage');
      const height = window.innerHeight-425;
      element.style.minHeight = height+'px';
      
    }else if(width > 640 && width < 1000){
      const element = document.querySelector('.cartPage');
      const height = window.innerHeight-363;
      element.style.minHeight = height+'px';
    }else if(width > 0 && width < 640){
      const element = document.querySelector('.cartPage');
      const height = window.innerHeight-479;
      element.style.minHeight = height+'px';
    }
    window.addEventListener('resize',function(){
      const width = window.innerWidth
      if(width > 1000){
        const element = document.querySelector('.cartPage');
        const height = window.innerHeight-425;
        element.style.minHeight = height+'px';
        
      }else if(width > 640 && width < 1000){
        const element = document.querySelector('.cartPage');
        const height = window.innerHeight-363;
        element.style.minHeight = height+'px';
      }else if(width > 0 && width < 640){
        const element = document.querySelector('.cartPage');
        const height = window.innerHeight-479;
        element.style.minHeight = height+'px';
      }
    })
  },
  methods:{
    ...mapActions({
      changeLanguage: 'languages/changeLanguage',
      setProductToCart :'cart/setProductToCart',
      addProductCount : 'cart/addProductCount',
      removeProductCount : 'cart/removeProductCount',
      deleteProduct : 'cart/deleteProduct',
    }),
    calculatePrice(price,count){
      return (price*count).toFixed(2)
    },
    deleteProductFromCart(id){
      this.deleteProduct(id)
    }
  }
}
</script>

<style>

</style>