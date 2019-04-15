<template>
  <div class="dex-search">
    <ul class="poke-list" ref="pokeList">
      <li
        v-for="(pokemon, index) in pokemonList"
        :key="index"
        @click="selectPokemon(pokemon.id)"
      >
        #{{ pokemon.id }} {{ pokemon.name | capitalize }}
      </li>
    </ul>
    <input type="text" v-model="searchString">
  </div>
</template>

<script>
import config from '@/vpdex.config'
import axios from 'axios'
import _ from 'lodash'

export default {

  data () {
    return {
      searchString: ''
    }
  },

  methods: {
    getPokeData (endpoint) {
      return axios.get(endpoint)
        .then(response => {
          return response.data
        })
    },

    selectPokemon (id) {
      this.getPokeData(`${config.pokemon}/${id}`)
        .then(data => {
          return data
        })
        .then(data => {
          this.buildPokeObject(data)
        })
    },

    buildPokeObject (data) {
      // get entry text to include with pokedata
      axios.get(`${config.species}/${data.id}`)
        .then(response => {
          let entries = response.data.flavor_text_entries
          let text = _.filter(entries, output => {
            return output.language.name === 'en'
          })

          return text[0].flavor_text
        })
        .then(text => {
          // filter out pokestats into their own key:value pairs object
          const stats = {}
          _.each(data.stats, data => {
            stats[data.stat.name] = data.base_stat
          })

          // create pokeobject to send to store
          const pokemon = {
            id: data.id,
            name: data.name,
            height: data.height,
            weight: data.weight,
            baseXP: data.base_experience,
            baseStats: stats,
            sprite: data.sprites.front_default,
            dexEntry: text
          }

          this.$store.dispatch('selectPokemon', pokemon)
        })
    }
  },

  computed: {
    pokemonList () {
      const pokelist = this.$store.state.pokemon
      const str = _.trim(this.searchString)

      // scroll poke-list to top of element after filter
      this.$nextTick(() => {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.$refs.pokeList.scrollTop = 0
      })

      // return filtered results
      return _.filter(pokelist, list => {
        if (/^\d+$/.test(str)) {
          // filter based on pokeid
          return _.includes(_.toString(list.id), str)
        } else if (_.isString(str)) {
          // filter based on pokename
          return _.includes(list.name.toLowerCase(), str.toLowerCase())
        } else {
          // return full list if nothing filtered
          return list
        }
      })
    }
  }
}
</script>

<style lang="scss">

.poke-list {
  display: inline-block;
  max-height: 200px;
  list-style-type: none;
  overflow: auto;

  li {
    cursor: pointer;
  }
}

</style>
