<template>
  <div class="page-left">
    <div class="power-buttons">
      <div class="Power"></div>
      <div class="power-indication-lights">
        <div class="power-low"></div>
        <div class="power-medium"></div>
        <div class="power-high"></div>
      </div>
    </div>
    <poke-screen />
  </div>
</template>

<script>
import PokeScreen from '@/components/PokeScreen'

export default {
  components: {
    'poke-screen': PokeScreen
  }
}
</script>

<style lang="scss">

.page-left {
  position: relative;
  width: 400px;
  height: 550px;
  border-radius: 30px 0 0 30px;
  background: rgb(65, 184, 131);
  box-shadow: -5px 5px 0 5px #194733;
  z-index: 999;
}

</style>
