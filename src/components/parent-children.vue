<template>
  <div>
    <p>总数：{{total}}</p>
    <!--<childrens-comp @increase="handleGetTotal" @reduce="handleGetTotal"></childrens-comp>-->
    <childrens-comp v-model="total"></childrens-comp>
  </div>
</template>

<script>
  import ChildrensComp from "./childrenComp"

  export default {
    /*属性值*/
    data() {
      return {total: 0}
    },
    /*组件引用*/
    components: {
      ChildrensComp
    },
    /*属性值实时计算*/
    computed: {},
    /*函数体*/
    methods: {
      handleGetTotal: function (total) {
        this.total = total
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>
