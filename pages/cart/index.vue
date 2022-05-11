<template>
  <div class="container">
    <Breadcrumb :positions="positions"/>

    <div class="cartPage">
      <div class="cartPage_items">
        <div class="cartPage_items_title">{{$t('cartItems')}}</div>
        <div class="cartPage_items_item">
          <div class="cartPage_items_item_image"><img src="~/assets/images/deleteImages/product.png" alt=""></div>

          <div class="cartPage_items_item_title">
            <div class="cartPage_items_item_title_subName">Fruits</div>
            <div class="cartPage_items_item_title_name">Almaly çizkeýk tagamly sufle "Attache"</div>
          </div>
 
          <div class="cartPage_items_item_quantity">
            <div class="cartPage_items_item_quantity_btn"><img src="~/assets/images/icons/minus.svg" alt="minus"></div>
            <div class="cartPage_items_item_quantity_quantity">1</div>
            <div class="cartPage_items_item_quantity_btn"><img src="~/assets/images/icons/plus.svg" alt="plus"></div>
          </div>

          <div class="cartPage_items_item_prices">
            <div class="cartPage_items_item_prices_old">115.00 manat</div>
            <div class="cartPage_items_item_prices_new">100.00 manat</div>
          </div>

          <div class="cartPage_items_item_delete"><img src="~/assets/images/icons/delete.svg" alt="delete"></div>
        </div>
        <div class="cartPage_items_item">
          <div class="cartPage_items_item_image"><img src="~/assets/images/deleteImages/product.png" alt=""></div>

          <div class="cartPage_items_item_title">
            <div class="cartPage_items_item_title_subName">Fruits</div>
            <div class="cartPage_items_item_title_name">Almaly çizkeýk tagamly sufle "Attache"</div>
          </div>

          <div class="cartPage_items_item_quantity">
            <div class="cartPage_items_item_quantity_btn"><img src="~/assets/images/icons/minus.svg" alt="minus"></div>
            <div class="cartPage_items_item_quantity_quantity">1</div>
            <div class="cartPage_items_item_quantity_btn"><img src="~/assets/images/icons/plus.svg" alt="plus"></div>
          </div>

          <div class="cartPage_items_item_prices">
            <div class="cartPage_items_item_prices_old">115.00 manat</div>
            <div class="cartPage_items_item_prices_new">100.00 manat</div>
          </div>

          <div class="cartPage_items_item_delete"><img src="~/assets/images/icons/delete.svg" alt="delete"></div>
        </div>
        <div class="cartPage_items_item">
          <div class="cartPage_items_item_image"><img src="~/assets/images/deleteImages/product.png" alt=""></div>

          <div class="cartPage_items_item_title">
            <div class="cartPage_items_item_title_subName">Fruits</div>
            <div class="cartPage_items_item_title_name">Almaly çizkeýk tagamly sufle "Attache"</div>
          </div>

          <div class="cartPage_items_item_quantity">
            <div class="cartPage_items_item_quantity_btn"><img src="~/assets/images/icons/minus.svg" alt="minus"></div>
            <div class="cartPage_items_item_quantity_quantity">1</div>
            <div class="cartPage_items_item_quantity_btn"><img src="~/assets/images/icons/plus.svg" alt="plus"></div>
          </div>

          <div class="cartPage_items_item_prices">
            <div class="cartPage_items_item_prices_old">115.00 manat</div>
            <div class="cartPage_items_item_prices_new">100.00 manat</div>
          </div>

          <div class="cartPage_items_item_delete"><img src="~/assets/images/icons/delete.svg" alt="delete"></div>
        </div>
        <!-- <div class="cartPage_items_noItem">
          <img src="~/assets/images/icons/startShopping.svg" alt="">
          <div class="empty">{{$t('cartEmpty')}}</div>
          <button class="startShopping">{{$t('startShopping')}}</button>
        </div> -->
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
          name:"Shopping cart",
          id:"1",
          to:"/cart"
        },
      }
    }
  },
  mounted(){
    const height = window.innerHeight-462;
    const element = document.querySelector('.cartPage');
    element.style.minHeight = height+'px';
    window.addEventListener('resize',function(){
      const height = window.innerHeight-462;
      const element = document.querySelector('.cartPage');
      element.style.minHeight = height+'px';
    })
  },
  methods:{
    
  }
}
</script>

<style>

</style>