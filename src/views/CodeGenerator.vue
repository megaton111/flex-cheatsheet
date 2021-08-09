<template>
  <div>

    <div class="makeWrap">
      
      <div class="makeView">
        <div class="flex-container" 
          :style="{ 
            flexDirection : direction , 
            flexWrap : wrap , 
            justifyContent : jcontent , 
            alignItems : aItems ,
            alignContent : aContent 
          }"
        >
          <div class="flex-item" 
            v-for="(item, idx) in items" 
            :key="idx" 
            @click="selectedItem( idx )" 
            :class="{ selected : idx == currentItem }" 
            :style="{ 
              order : item.order , 
              flexGrow : item.grow , 
              flexShrink : item.shrink  , 
              flexBasis : item.basis + 'px' ,
              alignSelf : item.self
            }"
          >
            {{ idx }}
          </div>
        </div>
      </div>

      <div class="elementControl">

        <!-- <Button setClass="btn active" clickEvt="addItems" /> -->

        <button type="button" class="btn active" @click="addItem">item 추가</button>
        <button type="button" class="btn active" @click="deleteItem">item 삭제</button>
        <button type="button" class="btn active" @click="selecteCancelItem">item 선택 취소</button>
      </div>

      <AlertSelectItem :currentItem="currentItem" :alert="alert" />

      <div class="makeController">

        <dl class="bxControl">
          <dt>flex-direction</dt>

          <dd class="btnControl">
            <button type="button" 
              v-for="( name, idx) in property.flexDirection" 
              :key="idx" 
              @click="setStyleContainer( 'direction', name )" 
              :class="{ select : name == direction }"
            >
              {{ name }}
            </button>
          </dd>
        </dl>

        <dl class="bxControl">
          <dt>flex-wrap</dt>

          <dd class="btnControl">
            <button type="button" 
              v-for="( name, idx) in property.flexWrap" 
              :key="idx" 
              @click="setStyleContainer( 'wrap', name )" 
              :class="{ select : name == wrap }"
            >
              {{ name }}
            </button>
          </dd>
        </dl>

        <dl class="bxControl">
          <dt>justify-content</dt>

          <dd class="btnControl">
            <button type="button" 
              v-for="( name, idx) in property.justifyContent" 
              :key="idx" 
              @click="setStyleContainer( 'jcontent', name )"
              :class="{ select : name == jcontent }"
            >
              {{ name }}
            </button>
          </dd>
        </dl>

        <dl class="bxControl">
          <dt>align-items</dt>

          <dd class="btnControl">
            <button type="button" 
              v-for="( name, idx) in property.alignItems" 
              :key="idx" 
              @click="setStyleContainer( 'aItems', name )"
              :class="{ select : name == aItems }"
            >
              {{ name }}
            </button>
          </dd>
        </dl>

        <dl class="bxControl">
          <dt>align-content</dt>

          <dd class="btnControl">
            <button type="button" 
              v-for="( name, idx) in property.alignContent" 
              :key="idx" 
              @click="setStyleContainer( 'aContent', name )"
              :class="{ select : name == aContent }"
            >
              {{ name }}
            </button>
          </dd>
        </dl>

        <dl class="bxControl">
          <dt>order</dt>
          <dd>
            <input type="text" v-model="order">
            <button type="button" class="btnApply" @click="setStyleBtn( 'order' )">적용</button>
          </dd>
        </dl>

        <dl class="bxControl">
          <dt>flex-grow</dt>
          <dd>
            <input type="text" v-model="grow">
            <button type="button" class="btnApply" @click="setStyleBtn( 'grow' )">적용</button>
          </dd>
        </dl>

        <dl class="bxControl">
          <dt>flex-shrink</dt>
          <dd>
            <input type="text" v-model="shrink">
            <button type="button" class="btnApply" @click="setStyleBtn( 'shrink' )">적용</button>
          </dd>
        </dl>

        <dl class="bxControl">
          <dt>flex-basis</dt>
          <dd>
            <input type="text" v-model="basis" placeholder="숫자만 입력 또는 auto">
            <button type="button" class="btnApply" @click="setStyleBtn( 'basis' )">적용</button>
          </dd>
        </dl>

        <dl class="bxControl">
          <dt>align-self</dt>

          <dd class="btnControl">
            <button type="button" 
              v-for="( name, idx) in property.alignSelf" 
              :key="idx" 
              @click="setStyleItem( 'self', name )"
            >
              {{ name }}
            </button>
          </dd>
        </dl>

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
      flexDirection : {{ direction }} , 
      flexWrap : {{ wrap }} , 
      justifyContent : {{ jcontent }} , 
      alignItems : {{ aItems }} ,
      alignContent : {{ aContent }} 
}
</pre>
<pre v-for="( item, idx ) in items" :key="idx">
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
      align-self : {{ item.self }}
}
</pre>
</div>
      </div>


    </div>

  </div>
</template>

<script>

  import AlertSelectItem from '../components/AlertSelectItem.vue' ;
  // import Button from '../components/Button.vue' ;

  export default {
    name : 'CodeGenerator' , 
    components : {
      AlertSelectItem, 
      // Button
    } , 
    data(){
      return {
        count : 1 , 
        currentItem : null ,
        items : [
          { order : '0', grow: '0', self : 'auto', shrink : '1', basis : 'auto' } , 
          { order : '0', grow: '0', self : 'auto', shrink : '1', basis : 'auto' } ,
          { order : '0', grow: '0', self : 'auto', shrink : '1', basis : 'auto' } ,
          { order : '0', grow: '0', self : 'auto', shrink : '1', basis : 'auto' } ,
          { order : '0', grow: '0', self : 'auto', shrink : '1', basis : 'auto' } ,
        ] , 
        property : {
          flexDirection : [ 'row', 'column' ] , 
          flexWrap : [ 'nowrap', 'wrap', 'wrap-reverse' ] , 
          alignSelf : [ 'flex-start', 'flex-end', 'center', 'baseline', 'stretch', 'auto' ] , 
          alignContent : [ 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch' ] , 
          alignItems : [ 'flex-start', 'flex-end', 'center', 'baseline', 'stretch' ] , 
          justifyContent : [ 'flex-start', 'flex-end', 'center', 'space-between', 'space-around' ] , 
        } ,
        direction : 'row' , 
        wrap : 'nowrap' , 
        jcontent : 'flex-start',
        aItems : 'stretch' , 
        aContent : 'stretch' ,
        order : '' ,
        grow : '' ,
        shrink : '' ,
        basis : '' , 
        alert : '' , 
      }
    } ,
    methods : {
      addItem(){ this.items.push({ order : 0, self : 'auto' }) ; } ,
      deleteItem(){ this.items.splice( this.items.length - 1, 1) ; } ,
      selecteCancelItem(){ this.currentItem = null },
      selectedItem( idx ) {
        console.log( 'idx : ', idx ) ; 
        if( idx == this.currentItem ) {
          this.currentItem = null ;
        } else {
          this.currentItem = idx ; 
          this.order = '' ; 
          this.grow = '' ; 
          this.shrink = '' ; 
          this.basis = '' ; 
          this.alert = '' ;
        }
      } ,

      setStyleBtn( style ) {
        if( this.currentItem == null ) {
          // alert( '아이템을 선택하세요' ) ; 
          this.alert = '적용할 아이템이 선택되지 않았습니다.' ;
        } else {
          this.items[this.currentItem][ style ] = this[ style ] ; 
          this[ style ] = '' ;
          this.alert = '' ; 
        }
      } ,

      setStyleItem( style, value ) {
        if( this.currentItem == null ) {
          // alert( '아이템을 선택하세요' ) ; 
          this.alert = '적용할 아이템이 선택되지 않았습니다.' ;
        } else {
          this.items[this.currentItem][ style ] = value ; 
        }
      } ,
      
      setStyleContainer( style, value ) {
        this[style] = value ; 
      } ,

      copyCode() {
        let data = this.$refs.codeWrap.textContent ; 
        let textarea = document.createElement('textarea'); 
        textarea.value = data; 
        document.body.appendChild(textarea); 
        textarea.select(); 
        textarea.setSelectionRange(0, 9999); 
        document.execCommand('copy'); 
        document.body.removeChild(textarea);
      }

    } ,
    created () {
      console.log( 'created in' ) ; 
      console.log( 'this.items :', this.$store.items ) ; 
    }
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
