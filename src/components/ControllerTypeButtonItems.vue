<template>
  <dl class="bxControl">
    <dt>{{ title }}</dt>

    <dd class="btnControl">
      <button type="button" 
        v-for="( name, idx) in $store.state.property[property]" 
        :key="idx" 
        @click="setStyleItem( property, name )"
      >
        {{ name }}
      </button>
    </dd>
  </dl>
</template>

<script>
  export default {
    name : 'ControllerTypeButton' ,
    props : [ 'title', 'property' ] ,
    methods : {
      setStyleItem( style, value ) {
        console.log( 'setStyleitem Click in' ) ; 
        this.$store.commit( 'setStyleItem' , {
          style : style, 
          value : value 
        })
      }
    }
  }
</script>