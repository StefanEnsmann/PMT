<template>
  <div class="rule-set-details">
    <div v-if="fileLoader">
      <label for="rule-set-file" class="file-select clickable">
          <img src="@/assets/img/ui/upload.svg" height="20" class="inline-images"/>
          Select file
      </label>
      <input
        type="file"
        id="rule-set-file"
        name="rule-set-file"
        accept="application/json"
        @change="loadConfigurationFile"
      />
    </div>
    <div v-if="details != null">
      <div class="details-heading">
        {{ details.name }}
        <img src="@/assets/img/ui/play.svg" @click="startRuleset" class="clickable"/>
        <a v-if="!fileLoader" :href="details.path" :download="details.path" class="download-button"><img src="@/assets/img/ui/download.svg"/></a>
      </div>
      <div class="details-subheading">
        {{ details.game }}
      </div>
      <div class="details-container">
        <div style="grid-row: 1 / 2; grid-column: 1 / 2">
          Pokédex: {{ details.pokemon }}
        </div>
        <div style="grid-row: 1 / 2; grid-column: 2 / 3">
          Static Pokémon: {{ details.static_pokemon }}
        </div>
        <div style="grid-row: 1 / 2; grid-column: 3 / 4">
          Trades: {{ details.trades }}
        </div>
        <div style="grid-row: 2 / 3; grid-column: 1 / 2">
          Locations: {{ details.locations }}
        </div>
        <div style="grid-row: 2 / 3; grid-column: 2 / 3">
          Items: {{ details.items }}
        </div>
        <div style="grid-row: 2 / 3; grid-column: 3 / 4">
          Story Items: {{ details.story_items }}
        </div>
        <div style="grid-row: 3 / 4; grid-column: 1 / 1">
          Trainers: {{ details.trainers }}
        </div>
        <div style="grid-row: 3 / 4; grid-column: 2 / 4">
          Supported languages:
          <span class="inline-images">
            <Flag
              v-for="locale in details.languages"
              :size="16"
              :code="locale"
              :key="locale"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Flag from "../misc/Flag.vue";
const validateRuleset = require("../../ruleset_validator");

export default {
  name: "RuleSetDetails",
  components: {
    Flag,
  },
  props: {
    fileLoader: {
      type: Boolean,
      default: false,
    },
    details: {
      type: Object,
      default: null,
    },
  },
  emits: ["fileSelected"],
  methods: {
    loadConfigurationFile(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        let d = validateRuleset(e.target.result);
        if (d !== null) {
          d["path"] = file.name;
        }
        this.$emit("fileSelected", d);
      };
      reader.readAsText(file);
    },
    startRuleset(event) {
      console.log(event);
    }
  },
};
</script>

<style scoped>
.rule-set-details {
  background-color: var(--background-color);
  border-radius: 8px;
  padding: 12px;
}

.inline-images {
  vertical-align: -3px;
}

.details-heading {
  font-size: 2rem;
  font-weight: 800;
}

.details-subheading {
  font-size: 1.5rem;
  font-weight: 600;
  font-style: italic;
  margin-bottom: 12px;
}

.details-container {
  display: grid;
  grid-template-columns: auto auto auto;
}

input[type=file] {
  display: none;
}

.file-select {
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px;
  display: inline-block;
  font-size: 1.2rem;
}

.download-button {
  margin-left: 4px;
}

.clickable {
  cursor: pointer;
}
</style>