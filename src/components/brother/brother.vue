<template>
  <div>
    {{message}}
    <ComponentA></ComponentA>
  </div>
</template>

<script>
  import ComponentA from "./brother-children"

  export default {
    name: "brother",
    data() {
      return {
        message: 'brother'
      }
    },
    components: {
     ComponentA
    },
  }
</script>

<style scoped>

</style>
