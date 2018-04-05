<template>
  <div>
    <div class="input-number">
      <input type="text" :value="currentValue" @change="handleChange">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      maxlength: {
        type: Number,
        default: Infinity
      },
      max: {
        type: Number,
        default: Infinity
      },
      min: {
        type: Number,
        default: -Infinity
      },
      value: {
        type: Number,
        default: 0
      }
    },
    /*属性值*/
    data() {
      return {
        currentValue: this.value
      }
    },
    /*属性值实时计算*/
    computed: {},
    /*函数体*/
    methods: {
      updateValue: function (val) {
        if (val > this.max) {
          val = this.max
        }
        if (val < this.min) {
          val = this.min
        }
        this.currentValue = val
      },
      handleChange: function (event) {
        var val = event.target.value.trim()
        var max = this.max
        var min = this.min
        var maxLength = this.maxLength
        if (this.isValueNumber(val)) {
          val = Number(val)
          this.currentValue = val
          if (val > max) {
            this.currentValue = max
          } else if (val < min) {
            this.currentValue = min
          }
        } else {
          event.target.value = this.currentValue
        }
      },
      isValueNumber: function (value) {
        return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value + "")
      }
    },
    //检测属性变化
    watch: {
      currentValue: function (val) {
        this.$emit('input', val)
        this.$emit("on-change", val)
      }
    },
    /*挂载完成*/
    mounted: function () {
      this.updateValue(this.value);
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>
