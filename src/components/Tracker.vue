<template>
  <div id="trck">
    <Splitpanes horizontal :push-other-panes="false">
      <Pane min-size="10">
        <Splitpanes :push-other-panes="false">
          <Pane min-size="10" size="25"><StoryItems /></Pane>
          <Pane min-size="10" size="75"><Pokedex /></Pane>
        </Splitpanes>
      </Pane>
      <Pane min-size="10">
        <Splitpanes :push-other-panes="false">
          <Pane min-size="10" size="25"><Items /></Pane>
          <Pane min-size="10" size="25"><Pokemon /></Pane>
          <Pane min-size="10" size="50"><Map /></Pane>
        </Splitpanes>
      </Pane>
    </Splitpanes>
  </div>
</template>

<script>
import Items from './tracker/Items.vue'
import Map from './tracker/Map.vue'
import Pokedex from './tracker/Pokedex.vue'
import Pokemon from './tracker/Pokemon.vue'
import StoryItems from './tracker/StoryItems.vue'
import { Splitpanes, Pane } from 'splitpanes';

export default {
  name: 'Tracker',
  components: {
    Items,
    Map,
    Pokedex,
    Pokemon,
    StoryItems,

    Splitpanes,
    Pane,
  }
}
</script>

<style>
.splitpanes--vertical > .splitpanes__splitter {
  min-width: 4px;
}
.splitpanes--horizontal > .splitpanes__splitter {
  min-height: 4px;
}
</style>

<style scoped>
#trck {
  width: 100%;
  height: 100%;
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
