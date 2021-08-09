<template>
  <div>

    <div class="makeWrap">
      
      <div class="makeView">
        <div class="flex-container" 
          :style="{ 
            flexDirection : $store.state.direction , 
            flexWrap : $store.state.wrap , 
            justifyContent : $store.state.justifyContent , 
            alignItems : $store.state.alignItems ,
            alignContent : $store.state.alignContent 
          }"
        >
          <div class="flex-item" 
            v-for="(item, idx) in $store.state.items" 
            :key="idx" 
            @click="selectedItem( idx )" 
            :class="{ selected : idx == $store.state.currentItem }" 
            :style="{ 
              order : item.order , 
              flexGrow : item.grow , 
              flexShrink : item.shrink  , 
              flexBasis : item.basis + 'px' ,
              alignSelf : item.alignSelf
            }"
          >
            {{ idx }}
          </div>
        </div>
      </div>

      <div class="elementControl">
        <Button setClass="btn active" eventType="add" title="Item 추가" />
        <Button setClass="btn active" eventType="delete" title="Item 삭제" />
        <Button setClass="btn active" eventType="cancel" title="Item 선택 취소" />
      </div>

      <AlertSelectItem />

      <div class="makeController">
        
        <ControllerTypeButton title="flex-direction" property="direction" />
        <ControllerTypeButton title="flex-wrap" property="wrap" />
        <ControllerTypeButton title="justify-content" property="justifyContent" />
        <ControllerTypeButton title="align-items" property="alignItems" />
        <ControllerTypeButton title="align-content" property="alignContent" />
        <ControllerTypeInput title="order" property="order" />
        <ControllerTypeInput title="flex-grow" property="grow" />
        <ControllerTypeInput title="flex-shrink" property="shrink" />
        <ControllerTypeInput title="flex-basis" property="basis" placeholder="숫자만 입력 또는 auto" />
        <ControllerTypeButtonItems title="align-self" property="alignSelf" />

      </div>

      <div class="codeView">
        <button type="buton" class="btnCopy" @click="copyCode">복사</button>
        <div ref="codeWrap">
          <pre>
          .flex-container {
                display: flex;
                width: 100%;
                height: 30vh;
                padding: 2px;
                overflow: auto;
                flexDirection : {{ $store.state.direction }} , 
                flexWrap : {{ $store.state.wrap }} , 
                justifyContent : {{ $store.state.justifyContent }} , 
                alignItems : {{ $store.state.alignItems }} ,
                alignContent : {{ $store.state.alignContent }} 
          }
          </pre>
          <pre v-for="( item, idx ) in $store.state.items" :key="idx">
          .flex-item:nth-child({{idx+1}}) {
                width : 100px ;
                height : 100px ;
                margin : 2px ;
                padding : 10px ;
                background-color : #0366d6 ;
                color : #fff ;
                order : {{ item.order }} ; 
                flex-grow : {{ item.grow }} ;
                flex-shrink : {{ item.shrink }} ;
                flex-basis : {{ item.basis == 'auto' ? item.basis : item.basis + 'px' }} ;
                align-self : {{ item.alignSelf }} ;
          }
          </pre>
        </div>
      </div>


    </div>

  </div>
</template>

<script>

  import AlertSelectItem from '../components/AlertSelectItem.vue' ;
  import Button from '../components/Button.vue' ;
  import ControllerTypeButton from '../components/ControllerTypeButton.vue' ;
  import ControllerTypeInput from '../components/ControllerTypeInput.vue' ;
  import ControllerTypeButtonItems from '../components/ControllerTypeButtonItems.vue' ;

  export default {
    name : 'CodeGenerator' , 
    components : {
      AlertSelectItem , 
      Button ,
      ControllerTypeButton ,
      ControllerTypeInput ,
      ControllerTypeButtonItems
    } , 
    data(){
      return {
      }
    } ,
    methods : {
      selectedItem ( idx ) { this.$store.commit( 'selectedItem', idx ) ; } ,
    } ,
  }

</script>

<style lang="scss" scoped>
  .flex-item {
    box-sizing: border-box ;
  }
  .selected {
    background-color: #ff4d4d !important; 
  }
</style>
