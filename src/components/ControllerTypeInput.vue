<template>

  <dl class="bxControl">
    <dt>{{ title }}</dt>
    <dd>
      <input type="text" v-model="$store.state[property]" :placeholder="placeholder">
      <button type="button" class="btnApply" @click="setStyleBtn( property )">적용</button>
    </dd>
  </dl>
    
</template>

<script>
  export default {
    name : 'ControllerTypeInput' ,
    props : [ 'title', 'property', 'placeholder' ] ,
    methods : {
      setStyleBtn( style ) { 
        this.$store.commit( 'setStyleBtn', style ) ; 
      } , 
    }
  }
</script>