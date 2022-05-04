<template>
  <div style="display:flex; flex-wrap:wrap" >
    <Product v-for="i in 4" :key="i"/>
  </div>
</template>

<script>
import Product from '../components/Product'
export default {
  components: { Product },
}
</script>

<style>

</style>