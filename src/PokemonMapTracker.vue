<template>
  <div id='container'>
    <!--<Configurator />-->
    <Tracker />
  </div>
</template>

<script>
//import Configurator from './components/Configurator.vue'
import Tracker from './components/Tracker.vue'

export default {
  name: 'PokemonMapTracker',
  components: {
    Tracker,
  //  Configurator
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
