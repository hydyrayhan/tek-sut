<template>
    <div>
        <div class="default_header">
            <Header />
        </div>
        <Nuxt />
        <Footer />
        <Chat />
    </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import Chat from '../components/Chat'
// import SearchedProducts from '../components/SearchedProducts'
export default {
    components: {Header, Footer, Chat},
    mounted() {
        let cartPerfumes = localStorage.getItem('cart-products')
        if (!cartPerfumes) cartPerfumes = []
        else cartPerfumes = JSON.parse(cartPerfumes)
        this.$store.dispatch('cart/setProductsToCart', cartPerfumes)

        let rateds = localStorage.getItem('rated-products')
        if (!rateds) rateds = []
        else rateds = JSON.parse(rateds)
        this.$store.dispatch('cart/setProductRated', rateds)
    },
}
</script>