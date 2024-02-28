<template>
  <div id="app">
    <!-- <home-view></home-view> -->
    <router-view></router-view>
</div>
</template>

<script>
// import RouterView from 'vue-router'
// import homeView from '@/components/Home/homeView.vue'
const components = {
  // homeView,
  //  RouterView

}
export default {
  name: 'App',
  components
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
