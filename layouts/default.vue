<template>
    <div>
        <div style="padding-top:116px">
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
import { mapGetters, mapActions } from 'vuex';
export default {
    components: {Header, Footer},
    created() {
        // this.$store.dispatch('cart/setProductsToCart')
        // const userToken = this.$store.getters['user/userToken']
        // if (userToken) this.$axios.setHeader('Authorization', `Bearer ${userToken}`)
    },
    // mounted() {
    //     let cartPerfumes = localStorage.getItem('cart-products')
    //     if (!cartPerfumes) cartPerfumes = []
    //     else cartPerfumes = JSON.parse(cartPerfumes)
    //     this.$store.dispatch('cart/setProductsToCart', cartPerfumes)
    // },
    // computed:{
    //     ...mapGetters({
    //         search: 'search/search',
    //     }),
    // },
}
</script>