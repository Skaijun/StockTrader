<template>
  <div id="app">
    <app-header></app-header>
    <router-view />
  </div>
</template>


<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
  name: "app",
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch('initStocks');
  }
};
</script>



<style>
*,
::before,
::after {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  max-width: 1230px;
  padding: 0 15px;
  margin: 0 auto;
}

</style>
