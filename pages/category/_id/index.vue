<template>
  <div class="container">
    <div class="categorypage_header">
      <Breadcrumb :positions="positions"/>
      <div class="category_filter">
        <div class="category_filter_price">{{$t('price')}}:</div>
        <div class="category_filter_lowToHigh category_filter_button active" @click="sort(1)">{{$t('lowtohigh')}}</div>
        <div class="category_filter_highToLow category_filter_button" @click="sort(2)">{{$t('hightolow')}}</div>
      </div>
    </div>
    <div class="category_products" >
      <div class="category_product" v-for="(product , i) in products" :key="i">
        <Product :product="product"/> 
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';
import Product from '~/components/Product.vue';
import { mapGetters } from 'vuex'
export default {
  components: { Breadcrumb, Product },
  data(){
    return{
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
      products:[],
      sub:'',
      category:'',
    }
  },
  computed: {
    currentLanguage() {
      return this.$i18n.locales.find(
        (locale) => locale.code === this.$i18n.locale
      )
    },
    ...mapGetters({
      categories: 'category/category',
      discountProducts:'discountProducts/discountProducts',
      newProducts:'newProducts/newProducts',
      giftProducts:'giftProducts/giftProducts',
      aksiyaProducts:'aksiyaProducts/aksiyaProducts'
    }),
  },
  async mounted(){
    const height = window.innerHeight-385;
    const element = document.querySelector('.category_products');
    element.style.minHeight = height+'px';
    window.addEventListener('resize',function(){
      const height = window.innerHeight-385;
      const element = document.querySelector('.category_products');
      element.style.minHeight = height+'px';
    })

    
    await this.takeData();
  },
  watch:{
    async $route(){
      await this.takeData()
    }
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
    async takeData(){
      this.category = this.$route.params.id;
      this.sub = this.$route.query.subcategory;
      console.log(this.category)
      console.log(this.sub)
      if(this.category === 'newAndAksiya'){
        this.positions.category.to = '/category/'+this.category;
        this.positions.category.name.tm = 'Arzanladyş we Aksiýalar';
        this.positions.category.name.ru = 'Arzanladyş we Aksiýalar ru';
        if(this.sub){
          if(this.sub === 'discount'){
            this.positions.subcategory_name = {
              tm: 'Discount products',
              ru: 'Discount products ru'
            }
            this.products = this.discountProducts
          }
          else if(this.sub === 'aksiya'){
            this.positions.subcategory_name = {
              tm: 'Aksiys products',
              ru: 'Aksiys products ru'
            }
            console.log(this.aksiyaProducts)
            this.products = this.aksiyaProducts;
          }
          else if(this.sub === 'new'){
            this.positions.subcategory_name = {
              tm: 'New products',
              ru: 'New products ru'
            }
            this.products = this.newProducts;
          }
          else if(this.sub === 'gift'){
            this.positions.subcategory_name = {
              tm: 'Gift products',
              ru: 'Gift products ru'
            }
            this.products = this.giftProducts
          }
        }else{
          this.positions.subcategory_name = null
        }
      }else{
        for(let i = 0; i< this.categories.length; i++){
          if(this.categories[i].category_id === this.category){
            this.positions.category.to = '/category/'+this.category;
            this.positions.category.name.tm = this.categories[i].name_tm;
            this.positions.category.name.ru = this.categories[i].name_ru;
            if(this.sub){
              
              for(let j = 0; j< this.categories[i].subcategories.length; j++){
                if(this.categories[i].subcategories[j].subcategory_id === this.sub){
                  this.positions.subcategory_name = {
                    tm:this.categories[i].subcategories[j].name_tm,
                    ru:this.categories[i].subcategories[j].name_ru
                  }
                }
              }
            }else{
              this.positions.subcategory_name = null
            }
            break;
          }
        }
        let res;
        if(!this.sub){
          try {
            res = await this.$axios.get(`/public/categories/products/${this.category}?sort=0`);
          } catch (error) {
            console.log(error);
          }
        }else{
          try {
            res = await this.$axios.get(`/public/sub-categories/products/${this.sub}?sort=0`);
          } catch (error) {
            console.log(error);
          }
        }
        this.products = res.data.products;
      } 
    }
  }
}
</script>

<style>

</style>