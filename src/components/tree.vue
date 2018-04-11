<template>
  <el-tree :data="data"
           :props="defaultProps"
           node-key="id"
           ref="tree"
           @node-click="handleNodeClick"
           :default-expanded-keys="[1]"
           :default-checked-keys="[4]"
  >

  </el-tree>
</template>

<script>
  export default {
    name: "tree",
    data() {
      return {
        data: [
          {
            id: 1,
            label: '一级 1',
            children: [
              {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                id: 9,
                label: '三级 1-1-1'
              }
              ]
            }]
          },
          {
            id: 2,
            label: '一级 2',
            children: [
              {
              id: 5,
              label: '二级 2-1',
              children: [{
                id: 10,
                label: '三级 2-1-1'
              }]
            },
              {
              id: 6,
              label: '二级 2-2',
              children: [{
                id: 11,
                label: '三级 2-2-1'
              }]
            }]
          },
          {
            id: 3,
            label: '一级 3',
            children: [
              {
                id: 7,
              label: '二级 3-1',
              children: [{
                id: 12,
                label: '三级 3-1-1'
              }]
            },
              {
                id: 8,
              label: '二级 3-2',
              children: [{
                id: 13,
                label: '三级 3-2-1'
              }]
            }]
          }
          ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data,node,ele) {
        //this.getCheckedNodes()
        //this.getCheckedKeys()
        this.setCheckedKeys()
        //this.resetChecked()
      },
      /*通过 node 获取*/
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      /*通过 key 获取*/
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      /*通过 key 设置*/
      setCheckedKeys() {
        console.log(this.$refs.tree);;
      },
      /*清空*/
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      }
    }
  }
</script>

<style scoped>

</style>
