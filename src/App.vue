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
