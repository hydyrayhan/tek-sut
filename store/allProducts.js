export const state = () => ({
  category: [],
  brands:[],
})

export const mutations = {
  CATEGORY(state, category) {
    state.category = category.products;
    state.brands = category.brands;
  },
}

export const actions = {
  async fetchAllProducts({ state, commit },brand) {
    // const category = require(`../assets/data/category.json`)
    const { data } = await this.$axios.get(`/public/products`);
    commit('CATEGORY', data)
  },
}

export const getters = {
  allProducts(state) {
    return state.category
  },
  allProductsBrands(state){
    return state.brands
  }
}
