export const actions = {
  async nuxtServerInit({ dispatch }) {

    try {
      await dispatch('banner/fetchBanner')
      await dispatch('category/fetchCategory')
      await dispatch('dynamicLang/fetchLanguage') 
      await dispatch('newProducts/fetchNewProducts')
      await dispatch('discountProducts/fetchDiscountProducts')
      await dispatch('brands/fetchBrands','all')
      await dispatch('aksiyaProducts/fetchAksiyaProducts')
      await dispatch('giftProducts/fetchGiftProducts')
    } catch (err) {
      console.log(err)
    }
  },
}
