<template>
  <header>
    <Navbar/>
  </header>

  <body>
    <div>
      <router-view/>
    </div>
  </body>
</template>

<script>
  import Navbar from './components/Navbar.vue';

  export default {
    name: 'App',
    components: {
      Navbar,
    },
  };
</script>

<style>
  body {
    margin: 0 auto;
    width: 100%;
    height: calc(100vh - 100px);
    background-color: #eff0f1;
  }
</style>
