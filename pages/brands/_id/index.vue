<template>
  <div class="container">
    <div class="brandHeader">
      <Breadcrumb :positions="position" />
      <div class="category_filter">
        <div class="category_filter_price">{{$t('price')}}:</div>
        <div class="category_filter_lowToHigh category_filter_button active" @click="sort(1)">{{$t('lowtohigh')}}</div>
        <div class="category_filter_highToLow category_filter_button" @click="sort(2)">{{$t('hightolow')}}</div>
      </div>
    </div>
    <div class="brandPage">
      <!-- <div class="brandPage_categories">
        <div class="brandPage_categories_category active">All</div>
        <div class="brandPage_categories_category">Beauty & Health</div>
        <div class="brandPage_categories_category">Cleaning</div>
      </div> -->

      <div class="brandPage_products">
        <div class="brandPage_products_product" v-for="(product , i) in products" :key="i">
          <LazyProduct :product="product"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import Breadcrumb from '~/components/Breadcrumb.vue';
import Product from '~/components/Product.vue';
import { mapGetters } from 'vuex'
export default {
  components:{Product},
  data(){
    return{
      position:{
        category:{
          name:{
            tm:"Brandtm",
            ru:"Brandru"
          },
          id:"1",
          to:"/brands"
        },
        subcategory_name:{
          tm:"inside brand",
          ru:"ichi brand",
        },
      },
      products:[]
    } 
  },
  computed:{
     ...mapGetters({
       brands:'brands/category',
    }),
  },
  async mounted(){
    const height = window.innerHeight-385;
    const element = document.querySelector('.brandPage');
    element.style.minHeight = height+'px';
    // window.addEventListener('resize',function(){
    //   const height = window.innerHeight-385;
    //   const element = document.querySelector('.brandPage');
    //   element.style.minHeight = height+'px';
    // })
    this.changeSubName();
    let res;
    try {
      res = await this.$axios.get(`/public/brands/products/${this.$route.params.id}?sort=2`);
    } catch (error) {
      console.log(error);
    }
    this.products = res.data;
  },
  methods:{
    sort(id){
      const el = document.querySelectorAll('.category_filter div');
      if(id == 1){
        const bool = el[id].classList.contains('active');
        if(!bool){
          el[id].classList.add('active');
          el[id+1].classList.remove('active');
          this.products.reverse();
        }
      }else if(id == 2){
        const bool = el[id].classList.contains('active');
        if(!bool){
          el[id].classList.add('active');
          el[id-1].classList.remove('active');
          this.products.reverse();
        }
      }
    },
    changeSubName(){
      for(let i =0; i<this.brands.length; i++){
        for(let j= 0; j<this.brands[i].category_brands.length; j++){
          if(this.brands[i].category_brands[j].brand_id === this.$route.params.id){
            this.position.subcategory_name.tm = this.brands[i].category_brands[j].name;
            this.position.subcategory_name.ru = this.brands[i].category_brands[j].name;
            break
          }
        }
      }
    }
  }
}
</script>

<style>

</style>