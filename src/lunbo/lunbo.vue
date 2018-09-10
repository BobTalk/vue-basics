<template>
  <div class="relative" style="line-height: 60px;">
    <div style="float: left;cursor: pointer;">
      <i @click="leftFn">左一页</i>
    </div>
    <div style="float: left;overflow: hidden">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" ref="objLi"
               style="position: relative;left: 0">
        <template v-for="(item,key) in obj">
          <el-submenu :index="key.toString()">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </div>
    <div style="float: left;cursor: pointer;">
      <i @click="rightFn">右一页</i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "lunbo",
    data() {
      return {
        activeIndex: '1',
        obj: [
          {},
          {},
          {},
          {}
        ],
        index: 0
      }
    },
    methods: {
      handleSelect() {

      },
      leftFn() {
        this.index++;
        for (var i = 0; i < this.obj.length; i++) {
          if (i == this.index) {
            this.$refs.objLi.$el.style.cssText = `left:-${i * 60}px`
          }
        }
      },
      rightFn() {
        this.index--;
        for (var i = this.index; i >0; i--) {
          if (i == this.index) {
            this.$refs.objLi.$el.style.cssText = `left:${i * 60}px`
          }
        }
      }
    }
  }
</script>

<style scoped>
  .relative {
    position: relative;
  }
</style>
