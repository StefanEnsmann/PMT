<template>
  <div id="configurator">
    <div class="ruleset-list">
      <RuleSetDetails
        :fileLoader="true"
        :details="customDetails"
        @fileSelected="customRulesetSelected"
      />
      <RuleSetDetails
        v-for="ruleset in availableRulesets"
        :details="ruleset"
        :key="ruleset.path"
      />
    </div>
  </div>
</template>

<script>
import RuleSetDetails from "./configurator/RuleSetDetails.vue";

export default {
  name: "Configurator",
  components: {
    RuleSetDetails,
  },
  data() {
    return {
      customDetails: null,
    };
  },
  async setup() {
    const response = await fetch("./game_data/_details.json");
    let availableRulesets = await response.json();
    return {
      availableRulesets,
    };
  },
  methods: {
    customRulesetSelected(details) {
      console.log(details);
      this.customDetails = details;
    },
  },
};
</script>

<style scoped>
#configurator {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.ruleset-list {
  box-sizing: border-box;
  margin: 0 auto;
  height: 100%;
  width: 800px;
  display: flex;
  flex-flow: column;
  gap: 10px;
  overflow-y: scroll;
  padding: 0 10px;
}
</style>
