<template>
  <div class="container">
    <div class="categorypage_header">
      <Breadcrumb :positions="positions"/>
      <div class="category_filter">
        <div class="category_filter_price">{{$t('price')}}:</div>
        <div class="category_filter_lowToHigh category_filter_button">{{$t('lowtohigh')}}</div>
        <div class="category_filter_highToLow category_filter_button active">{{$t('hightolow')}}</div>
      </div>
    </div>
    <div class="category_products" >
      <div class="category_product" v-for="i in 100" :key="i">
        <Product /> 
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';
import Product from '~/components/Product.vue';
export default {
  components: { Breadcrumb, Product },
  data(){
    return{
      positions:{
        category:{
          name:{
            tm:"Category",
            ru:"Category"
          },
          id:"1",
          to:"/"
        },
        subcategory_name:'Sub category',
      }
    }
  }
}
</script>

<style>

</style>