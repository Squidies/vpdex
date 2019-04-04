import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemon: Array,
    selectedPoke: Object
  },

  mutations: {
    _initSpecies (state, payload) {
      state.pokemon = payload
    },

    _selectPokemon (state, payload) {
      state.selectedPoke = payload
    }
  },

  actions: {
    initSpecies (context, payload) {
      context.commit('_initSpecies', payload)
    },

    selectPokemon (context, payload) {
      context.commit('_selectPokemon', payload)
    }
  }
})
