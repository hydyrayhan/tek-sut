export const state = () => ({
  category: [],
})

export const mutations = {
  CATEGORY(state, category) {
    state.category = category
  },
}

export const actions = {
  async fetchNewProducts({ state, commit }) {
    // const category = require(`../assets/data/category.json`)
    const { data } = await this.$axios.get(`/public/products/new`);
    commit('CATEGORY', data.new_products)
  },
}

export const getters = {
  newProducts(state) {
    return state.category
  },
}
