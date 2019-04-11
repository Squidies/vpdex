<template>
  <div class="poke-entry" data-simplebar>
    <div class="pokename">#{{pokeentry.id}} {{ pokeentry.name | capitalize }}</div>
    <div class="sprite"><img :src="pokeentry.sprite" alt=""></div>
    <div class="pokeheight">Height: {{ pokeentry.height }}</div>
    <div class="pokeweight">Weight: {{ pokeentry.weight }}</div>
    <div class="basestats">
      <h4>Base Stats</h4>
      <div class="xp">XP: {{ pokeentry.baseXP }}</div>
      <div class="attack">Attack: {{ pokeentry.baseStats.attack }}</div>
      <div class="defense">Defense: {{ pokeentry.baseStats.defense }}</div>
      <div class="special-attack">Special Attack: {{ pokeentry.baseStats['special-attack'] }}</div>
      <div class="special-defense">Special Defense: {{ pokeentry.baseStats['special-defense'] }}</div>
      <div class="speed">Speed: {{ pokeentry.baseStats.speed }} </div>
      <div class="speed">Speed: {{ pokeentry.baseStats.speed }}</div>
    </div>
    <div class="dex-entry-text">
      <p>{{ pokeentry.dexEntry }}</p>
    </div>
  </div>
</template>

<script>
import 'simplebar'
import 'simplebar/dist/simplebar.css'

export default {
  computed: {
    pokeentry () {
      return this.$store.state.selectedPoke
    }
  }
}
</script>

<style>

.poke-entry {
  max-height: 100%;
  margin: 0 1rem;
  overflow: auto;
}

</style>
