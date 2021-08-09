<template>
  <div class="wrapAlert">
    <strong class="alert" v-if="alert">{{ alert }}</strong>
    <p class="txtSelectItem" v-if="currentItem != null ">{{ currentItem }}번째 item이 선택되었습니다</p>
  </div>
</template>

<script>
  export default {
    name : 'AlertSelectItem' , 
    props : [ 'currentItem', 'alert' ]
  }
</script>

<style lang="scss" scoped>

</style>