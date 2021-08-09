<template>
  <button type="button" :class="setClass" @click="clickEvt( eventType )">{{ title }}</button>
</template>

<script>
  export default {
    name : 'Button' ,
    props : [ 'setClass', 'eventType', 'title' ] ,
    methods : {
      clickEvt ( type ) {
        console.log( 'click event type : ', type ) ; 
        if( type == 'add' ) {
          this.$store.commit( 'add' ) ; 
        } else if ( type == 'delete' ) {
          this.$store.commit( 'delete' ) ; 
        } else if ( type == 'cancel' ) {
          this.$store.commit( 'cancel' ) ; 
        }
      } ,
    } ,
    created () {
      console.log( 'this.setClass : ', this.setClass ) ; 
    }
  }
</script>