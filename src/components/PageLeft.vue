<template>
  <div class="page-left">
    <div class="curve"></div>
    <poke-power-buttons />
    <div class="poke-display">
      <poke-screen />
    </div>
  </div>
</template>

<script>
import PokeScreen from '@/components/PokeScreen'
import PokePowerButtons from '@/components/ui/PokePowerButtons'

export default {
  components: {
    'poke-screen': PokeScreen,
    'poke-power-buttons': PokePowerButtons
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

.curve {
  position: absolute;
  display: block;
  width: 240px;
  height: 125px;
  background: #266d4d;
  border-radius: 30px 0 120px;
  box-shadow: -5px 5px 0 5px #194733;
}

.poke-display {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 325px;
  height: 225px;
  margin: 60px auto 0;
  border-radius: 18px;
  background: #7d7777;

  &::after {
    display: block;
    background: #41b883;
    width: 75px;
    height: 30px;
    position: absolute;
    left: -25px;
    bottom: 0;
    transform: rotate(45deg);
    content: "";
  }
}

</style>
