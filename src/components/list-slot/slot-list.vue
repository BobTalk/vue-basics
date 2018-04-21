<template>
  <div>
    <my-list :books="books">
      <template slot="book" slot-scope="props">
        <li>{{props.bookName}}</li>
      </template>
    </my-list>
  </div>
</template>

<script>
  import MyList from "./list"

  export default {
    /*属性值*/
    data() {
      return {
        books: [
          {name: "<<vue>>"},
          {name: "<<vue1>>"},
          {name: "<<vue2>>"}
        ]
      }
    },
    /*组件引用*/
    components: {MyList},
    /*属性值实时计算*/
    computed: {},
    /*函数体*/
    methods: {},
    //检测属性变化
    watch: {
      'attr': function (newValue, oldValue) {
        console.log('name has changed ', newValue, oldValue);
      }
    },
    //创建前状态
    beforeCreate: function () {
      console.log("beforeCreate");
    },
    /*创建完成*/
    created: function () {
      console.log("created");
    },
    /*挂载前*/
    beforeMount: function () {
      console.log("beforeMount");
    },
    /*挂载完成*/
    mounted: function () {
      console.log("mounted");
    },
    /*更新前*/
    beforeUpdate: function () {
      console.log("beforeUpdate");
    },
    //更新完成状态
    updated: function () {
      console.log("updated");
    },
    /*组件激活时调用*/
    activated: function () {
      console.log("activated");
    },
    /*组件移除时调用*/
    deactivated: function () {
      console.log("deactivated");
    },
    /*销毁前*/
    beforeDestory: function () {
      console.log("beforeDestory");
    },
    /*销毁完成*/
    destoryed: function () {
      console.log("destoryed");
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>
