<template>
 <!-- <ele>
    <p slot="footer">Copyright 2016 Evan You</p>
    <h1 slot="header"><span>About Me</span></h1>
    <h1 slot="BBB"><span>About Me</span></h1>
    <h1 slot="CCC"><span>About Me</span></h1>
    <p>If I have some content down here</p>
  </ele>-->
  <Child></Child>
</template>

<script>
  import Child from "./render-children"

  export default {
    name: "render",
    components: {
      Child,
      "ele": {
        render: function (createElement, context, fn) {
          if (this.$slots) {
            for (var key in this.$slots) {
              console.log(this.$slots[key]);
            }
          }
          var header = this.$slots.header,//返回由VNode组成的数组
            body = this.$slots.default,
            footer = this.$slots.footer;
          return createElement('div',
            /*  {
                'class': {
                  show: this.show
                },
                attrs: {
                  id: 'elem'
                },
                on: {
                  click: this.handleClick
                }
              },
              '文本'*/
            [
              createElement('header', header),
              createElement('main', [
                createElement("div", body)
              ]),
              createElement('footer', footer)
            ])
        },
        data: function () {
          return {
            show: true
          }
        },
        methods: {
          handleClick: function () {
            alert('clicked!');
          }
        }
      },
    },

  }
</script>

<style scoped>

</style>
