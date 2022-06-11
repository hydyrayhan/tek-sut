export const state = () => ({
  category: [],
  brands:[],
})

export const mutations = {
  CATEGORY(state, category) {
    state.category = category.new_products
    state.brands = category.brands
  },
}

export const actions = {
  async fetchNewProducts({ state, commit }) {
    // const category = require(`../assets/data/category.json`)
    const { data } = await this.$axios.get(`/public/products/new`);
    commit('CATEGORY', data)
  },
}

export const getters = {
  newProducts(state) {
    return state.category
  },
  newProductsBrands(state){
    return state.brands
  }
}
