<template>
  <label class="header_bottom_box header_search">
    <input type="text" :placeholder="$t('search')" @keydown.enter="search()" v-model="searchValue">
    <div class="header_bottom_box_icon"><img src="~/assets/images/icons/headerSearch.svg" alt="headerSearch"></div>
    <div class="searched" v-if="searchedIsOpen" v-click-outside="closeSearchBar">
      <div class="searched_notFind" v-if="notFound">{{$t('notFind')}}</div>

      <div class="searched_find">
        <div class="searched_find_products">
          <span @click="closeSearchBar">
            <nuxt-link to="/product/1" v-for="i in 3" :key="i" class="searched_find_products_product">
              <div class="image"><img src="~/assets/images/deleteImages/product.png" alt="product"></div>
              <div class="name">Almaly çizkeýk tagamly sufle "Attache"500 gr (±15 gr)</div>
              <div class="prices">
                <div class="prices_new">8.00 manat</div>
                <div class="prices_old">12.00 manat</div>
              </div>
            </nuxt-link>
          </span>
        </div>
        <div class="searched_find_bottom">
          <span @click="clearSearch">
            <nuxt-link to="/search">{{$t('seeAll')}}</nuxt-link> 
          </span>
          <span>{{$t('result')}}:2</span>
        </div>
      </div>
    </div>
  </label>
</template>

<script>
export default {
  data(){
    return{
      notFound:false,
      searchValue:'',
      searchedIsOpen:false,
    }
  },
  methods:{
    search(){
      const result = true;
      this.searchedIsOpen = true;
      if(result){

      }else{
      }

    },
    closeSearchBar(){
      this.searchedIsOpen = false;
      console.log("HEllmi men worked")
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