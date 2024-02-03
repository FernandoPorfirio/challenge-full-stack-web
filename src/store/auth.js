const state = {
  authToken: null
}

const mutations = {
  setAuthToken(state, token) {
    state.authToken = token
  }
}

const actions = {
  saveAuthToken({ commit }, token) {
    commit('setAuthToken', token)
    localStorage.setItem('authToken', token)
  },
  loadAuthToken({ commit }) {
    const token = localStorage.getItem('authToken')
    if (token) {
      commit('setAuthToken', token)
    }
  }
}

const getters = {
  isAuthenticated: (state) => !!state.authToken,
  authToken: (state) => state.authToken
}

export default {
  state,
  mutations,
  actions,
  getters
}
