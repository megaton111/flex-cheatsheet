<template>
<transition name="fade">
  <div class="snackBar" v-show="$store.state.snackBarChk">{{ $store.state.snackBarMessage }}</div>
</transition>
</template>

<script>
  export default {
    name : 'SnackBar' , 
    // props : ['message', 'chkSnackBar'] ,
  }
</script>