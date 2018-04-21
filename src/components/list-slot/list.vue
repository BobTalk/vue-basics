<template>
  <div>
    <ul>
      <slot name="book" v-for="book in books" :book-name="book.name"></slot>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "list",
    props: {
      books: {
        type: Array,
        default: function () {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
