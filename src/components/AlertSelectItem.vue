<template>
  <div class="wrapAlert">
    <strong class="alert" v-if="this.$store.state.alert">{{ this.$store.state.alert }}</strong>
    <p class="txtSelectItem" v-if="this.$store.state.currentItem != null ">{{ this.$store.state.currentItem }}번째 item이 선택되었습니다</p>
  </div>
</template>

<script>
  export default {
    name : 'AlertSelectItem' , 
  }
</script>

<style lang="scss" scoped>

</style>