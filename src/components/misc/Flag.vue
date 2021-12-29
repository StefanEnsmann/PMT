<template>
  <img :src="url" :height="size" class="flag-image" />
</template>

<script>
export default {
  name: "Flag",
  props: {
    code: {
      type: String,
      default: "en",
    },
    size: {
      type: Number,
      default: 64,
    },
  },
  computed: {
    url() {
      return "./img/ui/flags/" + this.code + ".svg";
    },
  },
};
</script>

<style scoped>
.flag-image {
    margin: 0 2px;
}
</style>