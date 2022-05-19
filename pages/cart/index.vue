<template>
  <div class="container">
    <Breadcrumb :positions="positions"/>

    <div class="cartPage">
      <!-- <div class="cartPage_items noItem_mobile"> -->
      <div class="cartPage_items">
        <div class="cartPage_items_title">{{$t('cartItems')}}</div>
        <div class="cartPage_items_item">
          <div class="cartPage_items_item_image"><img src="~/assets/images/deleteImages/product.png" alt=""></div>

          <span class="mobileRes">
            <div class="cartPage_items_item_title">
              <div class="cartPage_items_item_title_subName">Fruits</div>
              <div class="cartPage_items_item_title_name">Almaly</div>
            </div>
 
            <span class="mobileRes_inside">
              <div class="cartPage_items_item_quantity">
                <div class="cartPage_items_item_quantity_btn"><img src="~/assets/images/icons/minus.svg" alt="minus"></div>
                <div class="cartPage_items_item_quantity_quantity">1</div>
                <div class="cartPage_items_item_quantity_btn"><img src="~/assets/images/icons/plus.svg" alt="plus"></div>
              </div>

              <div class="cartPage_items_item_prices">
                <div class="cartPage_items_item_prices_old">115.00 manat</div>
                <div class="cartPage_items_item_prices_new">100.00 manat</div>
              </div>
            </span>
          </span>

          <div class="cartPage_items_item_delete"><img src="~/assets/images/icons/delete.svg" alt="delete"></div>
        </div>
        <div class="cartPage_items_item">
          <div class="cartPage_items_item_image"><img src="~/assets/images/deleteImages/product.png" alt=""></div>

          <span class="mobileRes">
            <div class="cartPage_items_item_title">
              <div class="cartPage_items_item_title_subName">Fruits</div>
              <div class="cartPage_items_item_title_name">Almaly çizkeýk tagamly sufle "500 gr (±15 gr) Almaly çizkeýk tagamly sufle "500 gr (±15 gr) </div>
            </div>
 
            <span class="mobileRes_inside">
              <div class="cartPage_items_item_quantity">
                <div class="cartPage_items_item_quantity_btn"><img src="~/assets/images/icons/minus.svg" alt="minus"></div>
                <div class="cartPage_items_item_quantity_quantity">1</div>
                <div class="cartPage_items_item_quantity_btn"><img src="~/assets/images/icons/plus.svg" alt="plus"></div>
              </div>

              <div class="cartPage_items_item_prices">
                <div class="cartPage_items_item_prices_old">115.00 manat</div>
                <div class="cartPage_items_item_prices_new">100.00 manat</div>
              </div>
            </span>
          </span>

          <div class="cartPage_items_item_delete"><img src="~/assets/images/icons/delete.svg" alt="delete"></div>
        </div>
        <div class="cartPage_items_item">
          <div class="cartPage_items_item_image"><img src="~/assets/images/deleteImages/product.png" alt=""></div>

          <span class="mobileRes">
            <div class="cartPage_items_item_title">
              <div class="cartPage_items_item_title_subName">Fruits</div>
              <div class="cartPage_items_item_title_name">Almaly</div>
            </div>
 
            <span class="mobileRes_inside">
              <div class="cartPage_items_item_quantity">
                <div class="cartPage_items_item_quantity_btn"><img src="~/assets/images/icons/minus.svg" alt="minus"></div>
                <div class="cartPage_items_item_quantity_quantity">1</div>
                <div class="cartPage_items_item_quantity_btn"><img src="~/assets/images/icons/plus.svg" alt="plus"></div>
              </div>

              <div class="cartPage_items_item_prices">
                <div class="cartPage_items_item_prices_old">115.00 manat</div>
                <div class="cartPage_items_item_prices_new">100.00 manat</div>
              </div>
            </span>
          </span>

          <div class="cartPage_items_item_delete"><img src="~/assets/images/icons/delete.svg" alt="delete"></div>
        </div>

        <!-- <div class="cartPage_items_noItem">
          <img src="~/assets/images/icons/startShopping.svg" alt="">
          <div class="empty">{{$t('cartEmpty')}}</div>
          <nuxt-link to="/" class="startShopping" >{{$t('startShopping')}}</nuxt-link>
        </div> -->
        
        <div class="mobile_totalPrice">
          <span> 
            <div class="totalPrice_title">{{$t('totalProducts')}}</div>
            <div class="totalPrice_price">12314 manat</div>
          </span>
        </div>
      </div>

      <div class="cartPage_myCart">
        <div class="cartPage_myCart_title">{{$t('myCart')}}</div>
        <div class="cartPage_myCart_totalPrice">
          <div class="cartPage_myCart_totalPrice_title">{{$t('totalProducts')}}:</div>
          <div class="cartPage_myCart_totalPrice_price">115.99 manat</div>
        </div>
        <button class="cartPage_myCart_btn" @click="$router.push('order')">{{$t('continue')}}</button>
      </div>
    </div>
    <nuxt-link to="/order" class="mobile_continueBtn">{{$t('continue')}}</nuxt-link>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';
export default {
  components: { Breadcrumb },
  data(){
    return{
      // windowSize:window.innerHeight,
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
    
  }
}
</script>

<style>

</style>