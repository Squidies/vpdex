<template>
  <div class="poke-screen">
    <poke-entry v-if="pokeIsSelected"/>
    <pokeball v-else />
  </div>
</template>

<script>
import _ from 'lodash'

import Pokeball from '@/components/ui/Pokeball'
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

<style>
.poke-screen {
  width: 300px;
  height: 150px;
  border: 3px solid rgb(20, 20, 20);
  border-radius: 18px;
  background: rgb(220, 220, 220);
  margin-bottom: 8px;
  z-index: 1000;
}
</style>
