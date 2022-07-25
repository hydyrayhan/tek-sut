<template>
  <div class="container">
    <div class="categorypage_header">
      <Breadcrumb :positions="positions"/>
      <div class="category_filter" v-click-outside="closeFilter">
        <div class="category_filter_filter filter1" @click="openFilter(1)" v-if="filter.filter.main">
          <span>{{$t('filter')}}</span>
          <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.66996 1.50001H9.33663L5.99663 5.70001L2.66996 1.50001ZM0.836626 1.24001C2.18329 2.96667 4.66996 6.16667 4.66996 6.16667V10.1667C4.66996 10.5333 4.96996 10.8333 5.33663 10.8333H6.66996C7.03663 10.8333 7.33663 10.5333 7.33663 10.1667V6.16667C7.33663 6.16667 9.81663 2.96667 11.1633 1.24001C11.5033 0.800005 11.19 0.166672 10.6366 0.166672H1.36329C0.809959 0.166672 0.496626 0.800005 0.836626 1.24001Z" fill="#646464"/>
          </svg>
          <div class="ul" v-if="filter.filter.bottom">
            <div class="cube"></div>
            <div class="cube2"></div>
            <div class="li" @click="sort(1)">{{$t('lowtohigh')}}</div>
            <div class="li" @click="sort(2)">{{$t('hightolow')}}</div>
          </div>
        </div>
        <div class="category_filter_filterSelected" v-else>
          <span>{{filter.filter.text[currentLanguage.code]}}</span>
          <!-- <span>{{currentLanguage.code}}</span> -->
          <svg @click="clearFilter(1)" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.66659 1.77333L8.72659 0.833328L4.99992 4.56L1.27325 0.833328L0.333252 1.77333L4.05992 5.5L0.333252 9.22666L1.27325 10.1667L4.99992 6.43999L8.72659 10.1667L9.66659 9.22666L5.93992 5.5L9.66659 1.77333Z" fill="#AFAFAF"/>
          </svg>
        </div>
        <!-- ////////////////////////////// -->
        <div class="category_filter_filter filter2" @click="openFilter(2)" v-if="filter.brand.main">
          <span>{{$t('chooseBrand')}}</span>
          <div class="ul" v-if="filter.brand.bottom">
            <div class="cube"></div>
            <div class="cube2"></div>
            <div class="li" @click="sortBrand(brand.brand_id,brand.name)" v-for="(brand , i) in allBrands" :key="i">{{brand.name}}</div>
          </div>
        </div>
        <div class="category_filter_filterSelected" v-else>
          <span>{{filter.brand.text}}</span>
          <svg @click="clearFilter(2)" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.66659 1.77333L8.72659 0.833328L4.99992 4.56L1.27325 0.833328L0.333252 1.77333L4.05992 5.5L0.333252 9.22666L1.27325 10.1667L4.99992 6.43999L8.72659 10.1667L9.66659 9.22666L5.93992 5.5L9.66659 1.77333Z" fill="#AFAFAF"/>
          </svg>
        </div>
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
import { mapGetters , mapActions} from 'vuex'
export default {
  components: { Breadcrumb, Product },
  data(){
    return{
      filter:{
        filter:{
          bottom:false,
          main:true,
          text:{
            tm:'tm',
            ru:'ru',
          }
        },
        brand:{
          bottom:false,
          main:true,
          text:'',
        },
      },
      globalBrandId:'',
      allBrands:[],
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
      aksiyaProducts:'aksiyaProducts/aksiyaProducts',
      allProducts:'allProducts/allProducts',
      allProductsBrands:'allProducts/allProductsBrands',
      discountProductsBrands:'discountProducts/discountProductsBrands',
      aksiyaProductsBrands:'aksiyaProducts/aksiyaProductsBrands',
      newProductsBrands:'newProducts/newProductsBrands',
      giftProductsBrands:'giftProducts/giftProductsBrands',
    }),
  },
  async mounted(){
    const height = window.innerHeight-385;
    const element = document.querySelector('.category_products');
    element.style.minHeight = height+'px';
    // window.addEventListener('resize',function(){
    //   const height = window.innerHeight-385;
    //   const element = document.querySelector('.category_products');
    //   element.style.minHeight = height+'px';
    // })
    await this.takeData();
  },
  watch:{
    async $route(){
      await this.takeData()
    }
  },
  methods:{

    async sortBrand(id,name){
      this.filter.brand.text = name;
      this.filter.filter.main = true;
      this.globalBrandId = id;
      if(id){
        this.filter.brand.bottom = false;
        this.filter.brand.main = false;
      }else{
        this.filter.brand.main = true
      }
      this.fullSort();
    },
    openFilter(id){
      if(id == 1){
        this.filter.filter.bottom = true
        this.filter.filter.main = true
        document.querySelector('.category_filter_filter.filter1').classList.add('active');
      }else if(id == 2){
        this.filter.brand.bottom = true;
        document.querySelector('.category_filter_filter.filter2').classList.add('active');
      }
    },
    closeFilter(){
      this.filter.filter.bottom = false;
      this.filter.brand.bottom = false;
      const el = document.querySelectorAll('.category_filter_filter')
      for(let i = 0; i<el.length; i++){
        el[i].classList.remove("active")
      }

    },
    clearFilter(id){
      if(id ==1 ){
        this.filter.filter.main = true;
        this.fullSort()
      }else if(id == 2){
        this.filter.brand.main = true
        this.sortBrand();
      }
    },
    sort(id){
      this.closeFilter();
      this.filter.filter.main = false
      if(id == 1){
        this.filter.filter.text.tm = 'Arzandan gymmada';
        this.filter.filter.text.ru = 'Arzandan gymmada ru';
      }else if(id == 2){
        this.filter.filter.text.tm = 'Gymmatdan arzana';
        this.filter.filter.text.ru = 'Gymmatdan arzana ru';
      }
      this.fullSort(id);
    },
    async fullSort(id){
      this.category = this.$route.params.id;
      this.sub = this.$route.query.subcategory;
      id -=1;
      if(this.category === 'newAndAksiya'){
        if(this.sub){
          if(this.sub === 'discount'){
            try {
              const {data} = await this.$axios.get(`/public/products/discount?sort=${id}&brand_id=${this.globalBrandId}`);
              this.products = data.discount_products
            } catch (error) {
              console.log(error);
            }
          }else if(this.sub === 'aksiya'){
            try {
              const {data} = await this.$axios.get(`/public/products/action?sort=${id}&brand_id=${this.globalBrandId}`);
              this.products = data.action_products
            } catch (error) {
              console.log(error);
            }
          }
          else if(this.sub === 'new'){
            try {
              const {data} = await this.$axios.get(`/public/products/new?sort=${id}&brand_id=${this.globalBrandId}`);
              this.products = data.new_products
            } catch (error) {
              console.log(error);
            }
          }
          else if(this.sub === 'gift'){
            try {
              const {data} = await this.$axios.get(`/public/products/gift?sort=${id}&brand_id=${this.globalBrandId}`);
              this.products = data.gift_products
            } catch (error) {
              console.log(error);
            }
          }
        }else{
          try {
            const {data} = await this.$axios.get(`/public/products?sort=${id}&brand_id=${this.globalBrandId}`);
            this.products = data.products
          } catch (error) {
            console.log(error);
          }
        }
      }else{
        let res;
        if(!this.sub){
          try {
            res = await this.$axios.get(`/public/categories/products/${this.category}?sort=${id}&brand_id=${this.globalBrandId}`);
          } catch (error) {
            console.log(error);
          }
        }else{
          try {
            res = await this.$axios.get(`/public/sub-categories/products/${this.sub}?sort=${id}&brand_id=${this.globalBrandId}`);
          } catch (error) {
            console.log(error);
          }
        }
        this.products = res.data.products;
      }
    },

    async takeData(){
      this.category = this.$route.params.id;
      this.sub = this.$route.query.subcategory;
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
            this.products = this.discountProducts;
            this.allBrands = this.discountProductsBrands;
          }
          else if(this.sub === 'aksiya'){
            this.positions.subcategory_name = {
              tm: 'Aksiys products',
              ru: 'Aksiys products ru'
            }
            this.products = this.aksiyaProducts;
            this.allBrands = this.aksiyaProductsBrands;
          }
          else if(this.sub === 'new'){
            this.positions.subcategory_name = {
              tm: 'New products',
              ru: 'New products ru'
            }
            this.products = this.newProducts;
            this.allBrands = this.newProductsBrands;
          }
          else if(this.sub === 'gift'){
            this.positions.subcategory_name = {
              tm: 'Gift products',
              ru: 'Gift products ru'
            }
            this.products = this.giftProducts
          }
        }else{
          this.products = this.allProducts
          this.positions.subcategory_name = null;
          this.allBrands = this.allProductsBrands
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
                  break
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
            res = await this.$axios.get(`/public/categories/products/${this.category}`);
          } catch (error) {
            console.log(error);
          }
        }else{
          try {
            res = await this.$axios.get(`/public/sub-categories/products/${this.sub}`);
          } catch (error) {
            console.log(error);
          }
        }
        this.products = res.data.products;
        this.allBrands = res.data.category_brands
      } 
    }
  }
}
</script>

<style>

</style>