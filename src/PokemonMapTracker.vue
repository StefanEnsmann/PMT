<template>
  <div id='container'>
    <Suspense v-if="!hasTrackerState" >
      <template #default>
        <Configurator />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
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
:root {
  --background-color: rgba(119, 186, 190, 0.98);
}

html, body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Libre Franklin', sans-serif;
  background-image: url("~@/assets/img/background.jpg");
  background-blend-mode: lighten;
  background-size: cover;
}

#app {
  width: 100%;
  height: 100%;
  margin: 0;
}

#container {
  width: 100%;
  height: 100%;
}

#loading {

}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  display: none;
}

::-webkit-scrollbar-thumb {
  background: var(--background-color);
  border-radius: 4px;
}
</style>
