<script>
export default {
  mounted() {
    this.$store.dispatch("getComments");
  },
  computed: {
    LOAD() {
      return this.$store.state.getComments.loadComments;
    },
  },
};
</script>

<template>
  <div>
    <h1>Comments</h1>

    <h2 v-if="!LOAD">LOADING !!!</h2>

    <ul v-else>
      <li v-for="el in $store.state.getComments.comments">
        {{ el.name }}
      </li>
    </ul>
  </div>
</template>

<style></style>
