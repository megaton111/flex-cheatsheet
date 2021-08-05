<template>
  <div class="sidebar">
    <nav>
      <router-link to="intro">Intro</router-link>
      <h2>Container</h2>
      <router-link to="display">display</router-link>
      <router-link to="direction">flex-direction</router-link>
      <router-link to="flexwrap">flex-wrap</router-link>
      <router-link to="flexflow">flex-flow</router-link>
      <router-link to="justifycontent">justify-content</router-link>
      <router-link to="alignitems">align-items</router-link>
      <router-link to="aligncontent">align-content</router-link>

      <h2>Children</h2>
      <router-link to="order">order</router-link>
      <router-link to="flexgrow">flex-grow</router-link>
      <router-link to="flexshrink">flex-shrink</router-link>
      <router-link to="flexbasis">flex-basis</router-link>
      <router-link to="alignself">align-self</router-link>
      <router-link to="flex">flex</router-link>
    </nav>
    <div class="copyright">FLEX CHEATSHEET was created <br /><a href="#;">by KEUNHO LEE.</a></div>
  </div>
</template>

<script>
  export default {
    name : 'Sidebar' , 
  }
</script>

<style lang="scss" scoped>

</style>