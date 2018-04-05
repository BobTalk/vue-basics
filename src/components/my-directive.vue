<template>
  <div v-test:msg.a.b="message">
  </div>
</template>

<script>
  export default {
    name: "my-directive",
    directives: {
      test: {
        /*被绑定*/
        bind: function (el, binding, vnode) {
          var keys = [];
          for (var i in vnode) {
            keys.push(i)
          }
          el.innerHTML = 'el =========== ' + el + '<br>'+
             'name ==========    ' + binding.name + '<br>' +
            'value ==========    ' + binding.value + '<br>' +
            'expression ==========    ' + binding.expression + '<br>' +
            'argument ==========    ' + binding.arg + '<br>' +
            'modifiers ==========    ' + JSON.stringify(binding.modifiers) + '<br>' +
            'vnode keys ==========    ' + keys.join(', ')
        },
        /*绑定到节点*/
        inserted: function () {

        },
        /*组件更新*/
        update: function () {

        },
        /*组件更新完成*/
        componentUpdated: function () {

        },
        /*解绑*/
        unbind: (e, t) => {
        }
      }
    },
    data() {
      return {
        message: 'some text'
      }
    },
  }
</script>

<style scoped>

</style>
