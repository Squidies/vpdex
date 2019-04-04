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
