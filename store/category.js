export const state = () => ({
  category: [],
})

export const mutations = {
  CATEGORY(state, category) {
    state.category = category
  },
}

export const actions = {
  fetchCategory({ state, commit }) {
    const category = require(`../assets/data/category.json`)
    console.log(category);
    commit('CATEGORY', category)
  },
}

export const getters = {
  category(state) {
    return state.category
  },
}
