export const state = () => ({
  category: [],
  brands:[],
})

export const mutations = {
  CATEGORY(state, category) {
    state.category = category.discount_products;
    state.brands = category.brands
  },
}

export const actions = {
  async fetchDiscountProducts({ state, commit }) {
    // const category = require(`../assets/data/category.json`)
    const { data } = await this.$axios.get(`/public/products/discount`);
    commit('CATEGORY', data)
  },
}

export const getters = {
  discountProducts(state) {
    return state.category
  },
  discountProductsBrands(state){
    return state.brands
  }
}
