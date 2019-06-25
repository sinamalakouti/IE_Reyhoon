<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>

export default {
  
  name: 'App',

  components:{
    
  }
}
</script>

<style>

@import '/assets/css/global.css';

#app {
  
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  */
  font-family: Shabnam !important;


  /* text-align: right; */
  /* color: #2c3e50; */
  direction: rtl;
  /* margin-top: 60px; */
}
</style>
