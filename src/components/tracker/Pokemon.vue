<template>
  <div>
    <WildPokemon />
    <StaticPokemon />
  </div>
</template>

<script>
import StaticPokemon from './StaticPokemon.vue'
import WildPokemon from './WildPokemon.vue'

export default {
  name: 'Pokemon',
  components: {
      StaticPokemon,
      WildPokemon,
  }
}
</script>

<style scoped>
</style>
