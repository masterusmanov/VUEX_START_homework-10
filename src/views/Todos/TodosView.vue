<script>
export default {
  mounted() {
    this.$store.dispatch("getTodos");
  },
  computed: {
    LOAD() {
      return this.$store.state.getTodos.loadTodos;
    },
  },
};
</script>

<template>
  <div>
    <h1>TODOS</h1>

    <h2 v-if="!LOAD">LOADING !!!</h2>

    <ul v-else>
      <li v-for="el in $store.state.getTodos.todos">
        {{ el.title }}
      </li>
    </ul>
  </div>
</template>

<style></style>
