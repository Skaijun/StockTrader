<template>
  <div>
    <div id="nav">
      <div class="nav__left-inner">
        <router-link to="/">Home</router-link> |
        <router-link to="/portfolio">Portfolio</router-link> |
        <router-link to="/stocks">Stocks</router-link>
      </div>
      <div class="nav__right-inner">
        <button class="nav__right-end-day-btn">End Day</button>
        <button class="nav__right-save-load-btn">Save & Load</button>
        <strong>Funds: 10000</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  margin-bottom: 100px;
}
.nav__right-inner button {
  margin-right: 20px;
  background-color: transparent;
  background: transparent;
  border: none;
  font-size: 28px;
  line-height: 32px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
}

.nav__right-inner button:hover {
  color: #2d41ee;
  cursor: pointer;
}
.nav__right-inner button:focus,
.nav__right-inner button:active {
  outline: none;
}

#nav {
  padding: 30px;
}

#nav a {
  color: #2c3e50;
}

#nav a:hover {
  color: #2d41ee;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>