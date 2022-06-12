export const actions = {
  async nuxtServerInit({ dispatch }) {

    try {
      await dispatch('banner/fetchBanner')
      await dispatch('category/fetchCategory')
      await dispatch('dynamicLang/fetchLanguage') 
      await dispatch('newProducts/fetchNewProducts')
      await dispatch('discountProducts/fetchDiscountProducts')
      await dispatch('brands/fetchBrands','all') // not need first
      await dispatch('aksiyaProducts/fetchAksiyaProducts')  //not need first
      await dispatch('giftProducts/fetchGiftProducts')  //not need first
      await dispatch('allProducts/fetchAllProducts')
    } catch (err) {
      console.log(err)
    }
  },
}
