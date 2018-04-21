<template>
  <div>
  {{value}}
  <input-children :max="999999" :min="0" :maxlength="4" v-model="value"></input-children></div>
</template>

<script>
  import InputChildren from "./input-children"

  export default {
    name: "input-number",
    components: {
      InputChildren
    },
    data() {
      return {
        value: 5
      }
    },
  }
</script>

<style scoped>

</style>
