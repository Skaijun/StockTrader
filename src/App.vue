<template>
  <div id="app">
    <app-header></app-header>
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
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
    this.$store.dispatch("initStocks");
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

.slide-enter-active {
  animation: slide-in 300ms ease-in-out forwards;
}
.slide-leave-active {
  animation: slide-out 300ms ease-in-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
