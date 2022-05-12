<template>
  <div class="container">
    <Breadcrumb :positions="position" />

    <div class="brandPage">
      <div class="brandPage_categories">
        <div class="brandPage_categories_category active">
          All
        </div>
        <div class="brandPage_categories_category">
          Grocery
        </div>
        <div class="brandPage_categories_category">
          Cleaning
        </div>
      </div>

      <div class="brandPage_brands">
        <nuxt-link to="/brands/fjldsjfldk" class="brandPage_brands_brand" v-for="i in 20" :key="i">
          <img src="~/assets/images/deleteImages/brand1.png" alt="">
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';
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
  }
}
</script>

<style>

</style>