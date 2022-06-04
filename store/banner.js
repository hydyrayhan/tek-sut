export const state = () => ({
  banner: [],
})

export const mutations = {
  BANNER(state, banner) {
    state.banner = banner
  },
}

export const actions = {
  async fetchBanner({ state, commit }) {
    // const banner = require(`../assets/data/category.json`)
    const { data } = await this.$axios.get(`/public/banners`)
    commit('BANNER', data.banners.rows)
  },
}

export const getters = {
  banner(state) {
    return state.banner
  },
}
