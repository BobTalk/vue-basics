<template>
  <el-button @click="handleEvent">
    通过父级直接修改数据
  </el-button>
</template>

<script>
  export default {
    name: "brother-children",
    methods: {
      handleEvent: function () {
        this.$parent.message = "来自A的信息"
      }
    }
  }
</script>

<style scoped>

</style>
