export const state = () => ({
  name: '',
  body: ''
})

export const mutations = {
  SET_PRODUCTS(state, categories) {
    state.name = 'name_'+categories;
    state.body = 'body_'+categories;
  },
}

export const actions = {
  async fetchLanguage({ commit }) {
    commit('SET_PRODUCTS', this.$i18n.locale)
  },
}

export const getters = {
  language(state) {
    return state
  },
}