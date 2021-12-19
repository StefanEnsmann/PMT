<template>
  <div id='container'>
    <Configurator v-if="!hasTrackerState" />
    <Tracker v-else/>
  </div>
</template>

<script>
import Configurator from './components/Configurator.vue'
import Tracker from './components/Tracker.vue'

export default {
  name: 'PokemonMapTracker',
  components: {
    Tracker,
    Configurator
  },
  computed: {
    hasTrackerState() {
      return this.$store.state.config.isValid
        && this.$store.state.storyItems.isValid
        && this.$store.state.pokedex.isValid
        && this.$store.state.locations.isValid;
    }
  }
}
</script>

<style>
html, body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 100%;
  height: 100%;
}
#container {
  width: 100%;
  height: 100%;
}
</style>
