<script>
export default {
  methods: {
    add() {
      this.$store.commit("INCREMENT");
    },
  },
};
</script>

<template>
  <div>
    <h1>{{ $store?.state?.counter.number }}</h1>
    <button :disabled="!$store.state.counter.load" @click="add">ADD</button>
  </div>
</template>

<style></style>
