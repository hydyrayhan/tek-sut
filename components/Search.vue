<template>
  <label class="header_bottom_box header_search">
    <input type="text" :placeholder="$t('search')" @keydown.enter="search()" v-model="searchValue">
    <div class="header_bottom_box_icon"><img src="~/assets/images/icons/headerSearch.svg" alt="headerSearch"></div>
    <div class="searched" v-if="searchedIsOpen" v-click-outside="closeSearchBar">
      <div class="searched_notFind" v-if="notFound">{{$t('notFind')}}</div>

      <div class="searched_find">
        <div class="searched_find_products">
          <span @click="closeSearchBar">
            <nuxt-link :to="'/product/'+product.product_id" v-for="(product , i) in data" :key="i" class="searched_find_products_product">
              <div class="image">
                <!-- <img src="~/assets/images/deleteImages/product.png" alt="product"> -->
                <img v-if="product.images[0]" v-bind:src="$config.url+'/'+product.images[0].image" alt="">
                <div class="name">{{product[language.name]}}</div>
              </div>
              <div class="prices">
                <div class="prices_new" v-if="product.price">{{product.price}} manat</div>
                <div class="prices_old" v-if="product.discount">{{product.price_old}} manat</div>
              </div>
            </nuxt-link>
          </span>
        </div>
        <div class="searched_find_bottom">
          <span @click="clearSearch">
            <nuxt-link :to="'/search?keyword='+searchValue" >{{$t('seeAll')}}</nuxt-link> 
          </span>
          <span>{{$t('result')}}:{{data.length}}</span>
        </div>
      </div>
    </div>
  </label>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data(){
    return{
      notFound:false,
      searchValue:'',
      searchedIsOpen:false,
      data:''
    }
  },
  computed:{
    ...mapGetters({
      language:'dynamicLang/language'
    })
  },
  methods:{
    async search(){
      const result = true;
      if(result){
        try {
          const {data} = await this.$axios.get(`public/products/search?keyword=${this.searchValue}`);
          this.data = data.products;
        } catch (error) {
          console.log(error)
        }
      }else{

      }
      this.searchedIsOpen = true;
    },
    closeSearchBar(){
      this.searchedIsOpen = false;
    },
    clearSearch(){
      this.closeSearchBar();
      this.searchValue = '';
      this.$emit("closeSearch");
    }
  }
}
</script>

<style>

</style>