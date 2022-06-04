export const actions = {
  async nuxtServerInit({ dispatch }) {

    try {
      await dispatch('banner/fetchBanner')
      await dispatch('category/fetchCategory')
      await dispatch('dynamicLang/fetchLanguage') 
      await dispatch('newProducts/fetchNewProducts')
      await dispatch('discountProducts/fetchDiscountProducts')
      await dispatch('brands/fetchBrands')
      // await dispatch('filters/fetchGender')
      // await dispatch('articles/fetchArticles')
      // await dispatch('banners/fetchBanners')
    } catch (err) {
      console.log(err)
    }
  },
}
