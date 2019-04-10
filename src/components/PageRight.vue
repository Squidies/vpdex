<template>
  <div class="page-right">
    <poke-list />
  </div>
</template>

<script>
import PokeList from '@/components/PokeList'

export default {
  components: {
    'poke-list': PokeList
  }
}
</script>

<style lang="scss">

.page-right {
  position: relative;
  width: 350px;
  height: 450px;
  border-radius: 0 0 30px 0;
  background: rgb(65, 184, 131);
  box-shadow: -5px 5px 0 5px #194733;
  z-index: 777;
}

</style>
