<template>
  <div id="trck">
    <div id="trck-top">
      <StoryItems class="first-col" />
      <Pokedex class="growing" />
    </div>
    <div id="trck-bottom" class="growing">
      <Items class="first-col" />
      <Pokemon class="second-col" />
      <Map class="growing" />
    </div>
  </div>
</template>

<script>
import Items from './tracker/Items.vue'
import Map from './tracker/Map.vue'
import Pokedex from './tracker/Pokedex.vue'
import Pokemon from './tracker/Pokemon.vue'
import StoryItems from './tracker/StoryItems.vue'

export default {
  name: 'Tracker',
  components: {
    Items,
    Map,
    Pokedex,
    Pokemon,
    StoryItems,
  }
}
</script>

<style scoped>
#trck {
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: black;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
}

#trck-top {
  display: flex;
  flex-direction: row;
  flex: 0 0 300px;

  margin-bottom: 10px;
}

#trck-bottom {
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
}

.first-col {
  flex: 0 0 350px;
  margin-right: 10px;
}

.second-col {
  flex: 0 0 500px;
  margin-right: 10px;
}

.growing {
  flex: 1 1 auto;
}
</style>
