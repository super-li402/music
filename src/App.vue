<template>
  <div id="app">
    <div>
      <TopBar></TopBar>
     <router-view/>
    </div>
   
  </div>
</template>

<script>
import TopBar from './components/content/TopBar'
export default {
  components:{
    TopBar
  }
}
</script>

<style>
@import './assets/css/normalize.css';
@import './assets/css/base.css'
</style>
