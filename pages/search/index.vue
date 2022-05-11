<template>
  <div class="container">
    <div class="searchPage_header">
      <Breadcrumb :positions="positions"/>
      <div class="searchPage_header_sum">{{$t('sum')}}: 100</div>
    </div>
    
    <div class="searchProducts">
      <div class="searchProducts_product" v-for="i in 1" :key="i">
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
          name:"Gozleg",
          id:"1",
          to:"/search"
        },
      }
    }
  },
  mounted(){
    const height = window.innerHeight-462;
    const element = document.querySelector('.searchProducts');
    console.log(element)
    element.style.minHeight = height+'px';
    window.addEventListener('resize',function(){
      const height = window.innerHeight-462;
      const element = document.querySelector('.searchProducts');
      element.style.minHeight = height+'px';
    })
  },
}
</script>

<style>

</style>