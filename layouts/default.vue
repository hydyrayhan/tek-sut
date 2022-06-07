<template>
    <div>
        <div class="default_header">
            <Header />
        </div>
        <Nuxt />
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
// import SearchedProducts from '../components/SearchedProducts'
export default {
    components: {Header, Footer},
    mounted() {
        let cartPerfumes = localStorage.getItem('cart-products')
        if (!cartPerfumes) cartPerfumes = []
        else cartPerfumes = JSON.parse(cartPerfumes)
        this.$store.dispatch('cart/setProductsToCart', cartPerfumes)
    },
}
</script>