<template>
  <div class="poke-screen">
    <poke-entry v-if="pokeIsSelected"/>
    <pokeball v-else />
  </div>
</template>

<script>
import _ from 'lodash'

import Pokeball from '@/components/Pokeball'
import PokeEntry from '@/components/PokeEntry'

export default {
  components: {
    'pokeball': Pokeball,
    'poke-entry': PokeEntry
  },

  computed: {
    pokeIsSelected () {
      return !_.isEmpty(this.$store.state.selectedPoke)
    }
  }
}
</script>
