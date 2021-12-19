<template>
  <div id="configurator">
    <input type="file" id="rule-set-file" name="rule-set-file" accept="application/json" @change="loadConfigurationFile">
    <textarea v-model="text"></textarea>
  </div>
</template>

<script>
export default {
  name: 'Configurator',
  data() {
    return {
      text: ""
    }
  },
  methods: {
    loadConfigurationFile(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = e => {
        this.text = e.target.result;
      };
      reader.readAsText(file);
    }
  }
}
</script>

<style scoped>
</style>
