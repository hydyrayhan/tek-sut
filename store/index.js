export const actions = {
  async nuxtServerInit({ dispatch }) {

    try {


      await dispatch('category/fetchCategory')
      await dispatch('dynamicLang/fetchLanguage') 
      // await dispatch('perfumes/fetchPerfumes')
      // await dispatch('filters/fetchSizes')
      // await dispatch('filters/fetchCategories')
      // await dispatch('filters/fetchGender')
      // await dispatch('articles/fetchArticles')
      // await dispatch('banners/fetchBanners')
    } catch (err) {
      console.log(err)
    }
  },
}
