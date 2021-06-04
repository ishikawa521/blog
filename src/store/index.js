import { createStore } from 'vuex'

import axiosBase from 'axios'

const axios = axiosBase.create({
  headers: {
    'X-API-KEY': '8f5abd0c-4090-4a03-be2a-f71807fe296d'
  },
  responseType: 'json'
});

export default createStore({
  state: {
    entry: undefined,
    entries: []
  },
  mutations: {
    GET_ENTRIES(state, data) {
      state.entries = data.contents
    },
    GET_ENTRY(state, data) {
      state.entry = data
    }
  },
  actions: {
    getEntries: async ({ commit }) => {
      const res = await axios.get('https://ishikawadesu.microcms.io/api/v1/entries')
      commit('GET_ENTRIES', res.data)
    },
    getEntry: async ({ commit }, id) => {
      const res = await axios.get(`https://ishikawadesu.microcms.io/api/v1/entries/${id}`)
      commit('GET_ENTRY', res.data)
    }
  },
  modules: {
  }
})
