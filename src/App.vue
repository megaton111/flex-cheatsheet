<template>
  <div id="app">
    <Header />
    <div id="container" class="container">
      <Sidebar />
      <div class="content">
        <h2>{{ currentRouteName }}</h2>
        <router-view></router-view>
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
// import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Header, Sidebar
  } ,
  computed : {
    currentRouteName() {
      return this.$route.name;
    }
  }
}
</script>

<style>
</style>