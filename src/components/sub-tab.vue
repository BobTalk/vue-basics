<template>
  <div class="main" v-clickoutside="handleClose">
    <button @click="show=!show">点击显示下拉框</button>
    <div class="dropdown" v-show="show">
      <ul>
        <li>11</li>
        <li>21</li>
        <li>31</li>
        <li>41</li>
        <li>51</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "sub-tab",
    directives: {
      clickoutside: {
        bind: function (el, binding, vnode) {
          function documentHandler(e) {
            if (el.contains(e.target)) {
              return false
            }
            if (binding.expression) {
              /*用来执行当前上下文methods中指定的函数*/
              binding.value(e)
            }
          }

          el.__vueClickOutside__ = documentHandler;
          document.addEventListener("click", documentHandler)
        },
        unbind: function (el, binding) {
          document.removeEventListener("click", el.__vueClickOutside__)
          delete el.__vueClickOutside__
        }
      }
    },
    data() {
      return {
        show: false
      }
    },
    methods: {
      handleClose: function () {
        this.show = false
      }
    }
  }
</script>

<style scoped>

</style>
