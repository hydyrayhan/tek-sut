<template>
  <div class="breadcrumb">
    <div><nuxt-link to="/">{{$t('home')}}</nuxt-link></div>
    <div>
      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.294956 10.59L1.70496 12L7.70496 6L1.70496 5.24537e-07L0.294955 1.41L4.87496 6L0.294956 10.59Z" :fill="positions.subcategory_name ? '#646464' : '#262626'"/>
      </svg>
      <nuxt-link :to="'/category/'+positions.category.id" :class="positions.subcategory_name ? '' : 'black'">{{positions.category.name}}</nuxt-link>
    </div>
    <div v-if="positions.subcategory_name">
      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.294956 10.59L1.70496 12L7.70496 6L1.70496 5.24537e-07L0.294955 1.41L4.87496 6L0.294956 10.59Z" fill="#262626"/>
      </svg>
      <span style="color:#262626">{{positions.subcategory_name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:['positions']
}
</script>

<style>

</style>