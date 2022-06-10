export const state = () => ({
  category: [],
})

export const mutations = {
  CATEGORY(state, category) {
    state.category = category
  },
}

export const actions = {
  async fetchAksiyaProducts({ state, commit }) {
    // const category = require(`../assets/data/category.json`)
    const { data } = await this.$axios.get(`/public/products/action`);
    commit('CATEGORY', data.action_products)
  },
}

export const getters = {
  aksiyaProducts(state) {
    return state.category
  },
}
