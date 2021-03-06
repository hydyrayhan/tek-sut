export const state = () => ({
  category: [],
  brands:[],
})

export const mutations = {
  CATEGORY(state, category) {
    state.category = category.gift_products
    state.brands = category.brands;
  },
}

export const actions = {
  async fetchGiftProducts({ state, commit }) {
    // const category = require(`../assets/data/category.json`)
    const { data } = await this.$axios.get(`/public/products/gift`);
    commit('CATEGORY', data)
  },
}

export const getters = {
  giftProducts(state) {
    return state.category
  },
  giftProductsBrands(state) {
    return state.brands
  },
  
}
