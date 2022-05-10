<template>
  <div class="container">
    <div class="brandHeader">
      <Breadcrumb :positions="position" />
      <div class="category_filter">
        <div class="category_filter_price">{{$t('price')}}:</div>
        <div class="category_filter_lowToHigh category_filter_button">{{$t('lowtohigh')}}</div>
        <div class="category_filter_highToLow category_filter_button active">{{$t('hightolow')}}</div>
      </div>
    </div>
    <div class="brandPage">
      <div class="brandPage_categories">
        <div class="brandPage_categories_category active">All</div>
        <div class="brandPage_categories_category">Beauty & Health</div>
        <div class="brandPage_categories_category">Cleaning</div>
      </div>

      <div class="brandPage_products">
        <div class="brandPage_products_product" v-for="i in 20" :key="i">
          <LazyProduct />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';
import Product from '~/components/Product.vue';
export default {
  components:{Breadcrumb , Product},
  data(){
    return{
      position:{
        category:{
          name:"Brands",
          id:"1",
          to:"/brands"
        },
        subcategory_name:'Brand',
      }
    }
  }
}
</script>

<style>

</style>