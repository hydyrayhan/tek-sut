export const state = () => ({
  category: [],
  brands:[],
})

export const mutations = {
  CATEGORY(state, category) {
    state.category = category.action_products
    state.brands = category.brands
  },
}

export const actions = {
  async fetchAksiyaProducts({ state, commit }) {
    // const category = require(`../assets/data/category.json`)
    const { data } = await this.$axios.get(`/public/products/action`);
    commit('CATEGORY', data)
  },
}

export const getters = {
  aksiyaProducts(state) {
    return state.category
  },
  aksiyaProductsBrands(state){
    return state.brands
  }
}
