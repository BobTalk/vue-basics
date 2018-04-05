<template>
  <el-row>
    <!--<el-button type="primary" @click="handleIncrease">+1</el-button>
    <el-button type="success" @click="handleReduce">-1</el-button>-->
    <el-button type="primary" @click="handleClickIncrease">+1</el-button>
    <el-button type="primary" @click="handleClickReduce">-1</el-button>
  </el-row>
</template>

<script>
  export default {
    name: "children-comp",
    data: function () {
      return {
        counter: 0
      }
    },
    methods: {
      handleIncrease: function () {
        this.counter++;
        this.$emit('increase', this.counter)
      },
      handleReduce: function () {
        this.counter--;
        this.$emit('reduce', this.counter)
      },
      handleClickIncrease: function () {
        this.counter++;
        this.$emit('input', this.counter)
      },
      handleClickReduce: function () {
        this.counter--;
        if (this.counter < 0) {
          this.$message({
            message: "已经是0",
            type: 'warning'
          })
          this.counter = 0
        } else {
          this.$emit('input', this.counter)
        }
      }
    }
  }
</script>

<style scoped>

</style>
