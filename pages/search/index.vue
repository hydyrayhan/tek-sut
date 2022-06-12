<template>
  <div class="container">
    <div class="searchPage_header">
      <Breadcrumb :positions="positions"/>
      <div class="searchPage_header_sum">{{$t('sum')}}: {{products.length}}</div>
    </div>
    
    <div class="searchProducts">
      <div class="searchProducts_product" v-for="(product , i) in products" :key="i">
        <LazyProduct :product="product"/>
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
            tm:"Gözleg",
            ru:"Поиск"
          },
          id:"1",
          to:"/search"
        },
      },
      products:[]
    }
  },
  watch:{
    async $route(){
      this.products = await this.takeData();
    }
  },
  async mounted(){
    const height = window.innerHeight-428;
    const element = document.querySelector('.searchProducts');
    element.style.minHeight = height+'px';
    window.addEventListener('resize',function(){
      const height = window.innerHeight-428;
      const element = document.querySelector('.searchProducts');
      element.style.minHeight = height+'px';
    })
    this.products = await this.takeData();
  },
  methods:{
    async takeData(){
      try {
        const productId = this.$route.query.keyword;
        let { data } = await this.$axios.get(`/public/products/search?keyword=${productId}`);
        return data.products
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style>

</style>