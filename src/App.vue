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
  } ,
  metaInfo: {
    title: 'CSS Flex 레이아웃',
    titleTemplate: '%s | BrickLab',
    htmlAttrs: {
    },
    meta: [
      { charset: 'utf-8'},
      { name: 'description', content: 'CSS 레이아웃 Flex box 튜토리얼 공부하기', vmid: 'description'},
      { name: 'keywords', content: "css,css3,flex,플렉스레이아웃,flexbox"},
      { name: 'author', content: "BrickLab"},
      {
        property: 'og:title',
        content: 'CSS Flex 레이아웃의 모든 것',
        template: chunk => `${chunk} | BrickLab`,
        vmid: 'og:title'
      },
      // mobile
      { name: 'viewport', content: 'width=device-width, initial-scale=1'}
    ]
  } ,
}
</script>

<style>
</style>