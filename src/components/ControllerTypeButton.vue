<template>
  <dl class="bxControl">
    <dt>{{ title }}</dt>

    <dd class="btnControl">
      <button type="button" 
        v-for="( name, idx) in $store.state.property[property]" 
        :key="idx" 
        @click="setStyleContainer( property, name )" 
        :class="{ select : name == $store.state[property] }"
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
      setStyleContainer( style, value ) {
        this.$store.commit( 'setStyleContainer' , {
          style : style, 
          value : value 
        })
      }
    }
  }
</script>