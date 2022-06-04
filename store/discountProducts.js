export const state = () => ({
  category: [],
})

export const mutations = {
  CATEGORY(state, category) {
    state.category = category
  },
}

export const actions = {
  async fetchDiscountProducts({ state, commit }) {
    // const category = require(`../assets/data/category.json`)
    const { data } = await this.$axios.get(`/public/products/discount`)
    commit('CATEGORY', data.discount_products)
  },
}

export const getters = {
  discountProducts(state) {
    return state.category
  },
}
