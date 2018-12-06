<template>
  <div id="app">
    <v-head></v-head>
    <foot></foot>
    <router-view/>
  </div>
</template>

<script>
import foot from '@/components/foot';
import head from '@/components/head';
export default {
  name: 'App',
  components:{
    foot,
    'v-head':head
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
