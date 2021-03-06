export const state = () => ({
  category: [],
})

export const mutations = {
  CATEGORY(state, category) {
    state.category = category
  },
}

export const actions = {
  async fetchCategory({ state, commit }) {
    // const category = require(`../assets/data/category.json`)
    const { data } = await this.$axios.get(`/public/categories`)
    commit('CATEGORY', data)
  },
}

export const getters = {
  category(state) {
    return state.category
  },
}
