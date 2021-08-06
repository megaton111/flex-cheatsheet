<template>
  <header id="header" class="header">
    <h1>{{ this.$store.state.title }}</h1>
    <nav>
      <router-link to="generator">Code Generator</router-link>
    </nav>
  </header>
</template>

<script>

import { mapGetters } from "vuex";

export default {
  name: 'Header',
  computed: {
    ...mapGetters(["getTitle"])
  }
}
</script>

<style scoped>
</style>