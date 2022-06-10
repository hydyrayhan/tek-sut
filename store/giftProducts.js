export const state = () => ({
  category: [],
})

export const mutations = {
  CATEGORY(state, category) {
    state.category = category
  },
}

export const actions = {
  async fetchGiftProducts({ state, commit }) {
    // const category = require(`../assets/data/category.json`)
    const { data } = await this.$axios.get(`/public/products/gift`);
    commit('CATEGORY', data.gift_products)
  },
}

export const getters = {
  giftProducts(state) {
    return state.category
  },
}
