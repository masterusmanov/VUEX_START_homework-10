<script>
export default {
  mounted() {
    this.$store.dispatch("getPhotos");
  },
  computed: {
    LOAD() {
      return this.$store.state.getPhotos.loadPhotos;
    },
  },
};
</script>

<template>
  <div>
    <h1>Photos</h1>

    <h2 v-if="!LOAD">LOADING !!!</h2>

    <ul v-else>
      <li v-for="el in $store.state.getPhotos.photos">
        {{ el.title }}
      </li>
    </ul>
  </div>
</template>

<style></style>
