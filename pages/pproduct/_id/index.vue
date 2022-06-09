<template>
  <div class="container">
    hello men practica ucinda
    {{product.brand.name}}
  </div>
</template>

<script>
export default {
  data(){
    return{
      product:{
        
      },
    }
  },
  async mounted(){
    let res;
    try {
      res = await this.$axios.get(`/public/products/${this.$route.params.id}`);
    } catch (error) {
      console.log(error);
    }
    console.log(res.data.oneProduct);
    // this.product = res.data.oneProduct;
    this.product.brand = res.data.oneProduct.brand.name;
    console.log(this.product)
  }
}
</script>

<style>

</style>