<script>
export default {
  mounted() {
    this.$store.dispatch("getPost");
  },
  computed: {
    LOAD() {
      return this.$store.state.loadPost;
    },
  },
};
</script>

<template>
  <div>
    <h1>Home</h1>

    <h2 v-if="!LOAD">LOADING !!!</h2>

    <ul v-else>
      <li v-for="el in $store.state.posts">
        {{ el.title }}
      </li>
    </ul>
  </div>
</template>

<style></style>
