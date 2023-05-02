<script>
export default {
  methods: {
    INCR() {
        this.$store.commit("INCREMENT");
      if (this.$store.state.counter.number >= 10) {
          this.$store.commit("SET_LOAD");
      }
    },

    SET_VAL(e) {
      this.$store.commit("SET_STR", e);
    },

    REQ_POST(){
      this.$store.dispatch('getPost')
    },
    REQ_COMMENT(){
      this.$store.dispatch('getComments')
    },
    REQ_PHOTOS(){
      this.$store.dispatch('getPhotos')
    },
    REQ_TODOS(){
      this.$store.dispatch('getTodos')
    }

  },

  computed: {
    NUM() {
      return this.$store.state.counter.number ;
    },
  },

};
</script>

<template>
  <div>
    <h1>{{$store.state.counter.number}}</h1>


<ul>
<li><router-link to="/" >Home</router-link></li>
<li><router-link to="/about" >About</router-link></li>
<li><router-link to="/comments" >Comments</router-link></li>
<li><router-link to="/photos" >Photos</router-link></li>
<li><router-link to="/todos" >Todos</router-link></li>

</ul>
  
    <button :disabled="!$store.state.counter.load" @click="INCR">INCRMENT</button>

    <input type="text" @input="(e) => SET_VAL(e.target.value)" />

    <!-- <button @click="REQ_POST">GET ALL POSTS</button>
    <button @click="REQ_COMMENT">GET ALL Comments</button>
    <button @click="REQ_PHOTOS">GET ALL Photos</button>
    <button @click="REQ_TODOS">GET ALL Todos</button> -->

    <router-view></router-view>
  </div>
</template>

<style scoped></style>
