<template>
  <Splitpanes horizontal>
    <Pane min-size="10" size="70"><WildPokemon /></Pane>
    <Pane min-size="10" size="30"><StaticPokemon /></Pane>
  </Splitpanes>
</template>

<script>
import StaticPokemon from './StaticPokemon.vue'
import WildPokemon from './WildPokemon.vue'
import { Splitpanes, Pane } from 'splitpanes';
import 'splitpanes/dist/splitpanes.css'

export default {
  name: 'Pokemon',
  components: {
      StaticPokemon,
      WildPokemon,

      Splitpanes,
      Pane,
  }
}
</script>

<style scoped>
</style>
