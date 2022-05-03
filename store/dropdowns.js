export const state = () => ({
  language: false,
})

export const mutations = {
  OPEN_DROPDOWN_WITH_NAME(state, name) {
    state[name] = true
  },

  CLOSE_DROPDOWN_WITH_NAME(state, name) {
    state[name] = false
  },
}

export const actions = {
  openDropdownWithName({ state, commit }, name) {
    console.log("Jfdkjls")
    commit('OPEN_DROPDOWN_WITH_NAME', name)
  },

  closeDropdownWithName({ state, commit }, name) {
    commit('CLOSE_DROPDOWN_WITH_NAME', name)
  },
}

export const getters = {
  dropdowns(state) {
    return state
  },
}
