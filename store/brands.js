export const state = () => ({
  category: [],
})

export const mutations = {
  CATEGORY(state, category) {
    state.category = category
  },
}

export const actions = {
  async fetchBrands({ state, commit }) {
    // const category = require(`../assets/data/category.json`)
    const { data } = await this.$axios.get(`/public/brands`)
    console.log(data);
    commit('CATEGORY', data)
  },
}

export const getters = {
  brands(state) {
    return state.category
  },
}
