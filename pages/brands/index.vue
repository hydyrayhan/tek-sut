<template>
  <div class="container">
    <Breadcrumb :positions="position" />

    <div class="brandPage">
      <div class="brandPage_categories">
        <div class="brandPage_categories_category active" @click="changeCategory({id:'all',index:0})">
          All
        </div>
        <div class="brandPage_categories_category" v-for="(category , i) in allCategory" :key="i" @click="changeCategory({id:category.category_id,index:i+1})">
          {{category[language.name]}}
        </div>
      </div>

      <div class="brandPage_brands">
        <nuxt-link :to="'/brands/'+brand.brand_id" class="brandPage_brands_brand" v-for="(brand , i) in allBrands" :key="i">
          <!-- <img src="~/assets/images/deleteImages/brand1.png" alt=""> -->
          <img v-bind:src="$config.url+'/'+brand.image" :alt="brand.image">
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';
import { mapGetters } from 'vuex'
export default {
  components:{Breadcrumb},
  data(){
    return{
      position:{
        category:{
          name:{
            tm:"Brand",
            ru:"Bradn"
          },
          id:"1",
          to:"/brands"
        },
        // subcategory_name:'Fruits',
      }
    }
  },
  mounted(){
    const height = window.innerHeight-385;
    const element = document.querySelector('.brandPage');
    element.style.minHeight = height+'px';
    window.addEventListener('resize',function(){
      const height = window.innerHeight-385;
      const element = document.querySelector('.brandPage');
      element.style.minHeight = height+'px';
    })
  },
  computed:{
     ...mapGetters({
       language: 'dynamicLang/language',
       allBrands: 'brands/allBrands',
       allCategory: 'brands/category',
    }),
  },
  methods:{
    changeCategory(data){
      const el = document.querySelectorAll('.brandPage_categories_category');
      for(let i = 0; i<el.length; i++){
        el[i].classList.remove('active')
      }
      document.querySelectorAll('.brandPage_categories_category')[data.index].classList.add('active')
      this.$store.dispatch('brands/take', data.id)
    } 
  }
}
</script>

<style>

</style>