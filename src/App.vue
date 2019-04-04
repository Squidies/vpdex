<template>
  <div id="vdex">
    <page-left />
    <div class="hinge"></div>
    <page-right />
  </div>
</template>

<script>
import config from '@/vpdex.config'
import axios from 'axios'
// import _ from 'lodash'

import PageLeft from '@/components/PageLeft'
import PageRight from '@/components/PageRight'

export default {
  name: 'app',

  components: {
    'page-left': PageLeft,
    'page-right': PageRight
  },

  created () {
    this.init()
  },

  methods: {
    init () {
      this.getPokeData(config.species)
        .then(data => {
          // get total # of species
          return data.count
        })
        .then(count => {
          // get all species entries
          return this.getPokeData(`${config.species}?limit=${count}`)
        })
        .then(data => {
          // populate pokemon data
          let results = []

          // add pokeid to list
          data.results.forEach((result, index) => {
            results.push({
              'name': result.name,
              'url': result.url,
              'id': index + 1
            })
          })

          this.$store.dispatch('initSpecies', results)
        })
    },

    getPokeData (endpoint) {
      return axios.get(endpoint)
        .then(response => {
          return response.data
        })
    }
  }
}
</script>

<style lang="scss">

#vdex {
  display: flex;
  max-width: 600px;
}

</style>
