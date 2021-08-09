<template>
  <button type="button" :class="setClass" @click="$store.commit( clickEvt )">item 추가</button>
</template>

<script>
  export default {
    name : 'Button' ,
    props : [ 'setClass', 'clickEvt' ] ,
    created () {
      console.log( 'this.setClass : ', this.setClass ) ; 
    }
  }
</script>