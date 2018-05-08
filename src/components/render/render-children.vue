<template>
  <ele>
    <div>
      <child>
        <slot>dfsdfdsfsfds</slot>
      </child>
    </div>
  </ele>
</template>

<script>
  import Vue from "vue"

  Vue.component("Child", {
    render: function (createElement) {
      return createElement("p", "test-data")
    }
  });
  Vue.component("ele", {
    render: function (createElement) {
      /*克隆slot节点*/
      function cloneVNode(vnode) {
        /*递归遍历 并克隆*/
        const cloneChildren = vnode.children && vnode.children.map(function (vnode) {
          return cloneVNode(vnode)
        });
        const cloned = createElement(
          vnode.tag,
          vnode.data,
          cloneChildren
        )
        cloned.text = vnode.text;
        cloned.isComment = vnode.isComment;
        cloned.componentOptions = vnode.componentOptions;
        cloned.elm = vnode.elm;
        cloned.context = vnode.context;
        cloned.ns = vnode.ns;
        cloned.isStatic = vnode.isStatic;
        cloned.key = vnode.key;
        return cloned
      }

      const vNodes = this.$slots.default;
      const cloneVNodes = vNodes.map(function (vnode) {
        return cloneVNode(vnode)
      })
      return createElement('div', [
        vNodes,
        cloneVNodes
      ])
    }
  });
  export default {
    name: "render-children",
  }
</script>

<style scoped>

</style>
