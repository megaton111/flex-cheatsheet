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
              flexBasis : item.basis + 'px'
            }"
          >
            {{ idx }}
          </div>
        </div>
        <div class="elementControl">
          <button type="button" class="btn active" @click="addItem">item 추가</button>
          <button type="button" class="btn active" @click="deleteItem">item 삭제</button>
        </div>
      </div>

      <div class="makeController">

        <dl>
          <dt>flex-direction</dt>
          <dd>
            <span>
              <input type="radio" value="row" name="dir" id="row" v-model="direction" />
              <label for="row">row</label>
            </span>
            <span>
              <input type="radio" value="column" name="dir" id="column" v-model="direction" />
              <label for="column">column</label>
            </span>
          </dd>
          <dt>flex-wrap</dt>
          <dd>
            <span>
              <input type="radio" value="nowrap" name="fwrap" id="nowrap" v-model="wrap" />
              <label for="nowrap">nowrap</label>
            </span>
            <span>
              <input type="radio" value="wrap" name="fwrap" id="wrap2" v-model="wrap" />
              <label for="wrap2">wrap</label>
            </span>
            <span>
              <input type="radio" value="wrap-reverse" name="fwrap" id="wrap-reverse" v-model="wrap" />
              <label for="wrap-reverse">wrap-reverse</label>
            </span>
          </dd>
          <dt>justify-content</dt>
          <dd>
            <span>
              <input type="radio" value="flex-start" name="justifycontent" id="fst" v-model="jcontent" />
              <label for="fst">flex-start</label>
            </span>
            <span>
              <input type="radio" value="flex-end" name="justifycontent" id="fed" v-model="jcontent" />
              <label for="fed">flex-end</label>
            </span>
            <span>
              <input type="radio" value="center" name="justifycontent" id="jct" v-model="jcontent" />
              <label for="jct">center</label>
            </span>
            <span>
              <input type="radio" value="space-between" name="justifycontent" id="jsb" v-model="jcontent" />
              <label for="jsb">space-between</label>
            </span>
            <span>
              <input type="radio" value="space-around" name="justifycontent" id="jsa" v-model="jcontent" />
              <label for="jsa">space-around</label>
            </span>
          </dd>

          
          <dt>align-items</dt>
          <dd>
            <span>
              <input type="radio" value="flex-start" name="alignitems" id="alignitems1" v-model="aItems" />
              <label for="alignitems1">flex-start</label>
            </span>
            <span>
              <input type="radio" value="flex-end" name="alignitems" id="alignitems2" v-model="aItems" />
              <label for="alignitems2">flex-end</label>
            </span>
            <span>
              <input type="radio" value="center" name="alignitems" id="alignitems3" v-model="aItems" />
              <label for="alignitems3">center</label>
            </span>
            <span>
              <input type="radio" value="baseline" name="alignitems" id="alignitems4" v-model="aItems" />
              <label for="alignitems4">baseline</label>
            </span>
            <span>
              <input type="radio" value="stretch" name="alignitems" id="alignitems5" v-model="aItems" />
              <label for="alignitems5">stretch</label>
            </span>
          </dd>

          <dt>align-content</dt>
          <dd>
            <span>
              <input type="radio" value="flex-start" name="aligncontent" id="aligncontent1" v-model="aContent" />
              <label for="aligncontent1">flex-start</label>
            </span>
            <span>
              <input type="radio" value="flex-end" name="aligncontent" id="aligncontent2" v-model="aContent" />
              <label for="aligncontent2">flex-end</label>
            </span>
            <span>
              <input type="radio" value="center" name="aligncontent" id="aligncontent3" v-model="aContent" />
              <label for="aligncontent3">center</label>
            </span>
            <span>
              <input type="radio" value="space-between" name="aligncontent" id="aligncontent4" v-model="aContent" />
              <label for="aligncontent4">space-between</label>
            </span>
            <span>
              <input type="radio" value="space-around" name="aligncontent" id="aligncontent5" v-model="aContent" />
              <label for="aligncontent5">space-around</label>
            </span>
            <span>
              <input type="radio" value="stretch" name="aligncontent" id="aligncontent6" v-model="aContent" />
              <label for="aligncontent6">stretch</label>
            </span>
          </dd>

          <dt>order</dt>
          <dd>
            <input type="text" v-model="order"><button type="button" @click="setOrderBtn( 'order' )">적용</button>
            <!-- <input type="number" value="0" @input="setOrder( $event.target.value )"> -->
            <!-- <input type="number" :value="order" @input="order=$event.target.value"> -->
            <!-- <input type="number" value="0" v-model="order" @change="setStyle( 'order' )"> -->
          </dd>

          <dt>flex-grow</dt>
          <dd>
            <input type="text" v-model="grow"><button type="button" @click="setGrowBtn">적용</button>
            <!-- <input type="number" value="0" v-model="grow" @change="setStyle( 'flex-grow' )"> -->
          </dd>

          <dt>flex-shrink</dt>
          <dd>
            <input type="text" v-model="shrink"><button type="button" @click="setShrinkBtn">적용</button>
            <!-- <input type="number" value="0" v-model="shrink" @change="setStyle( 'flex-shrink' )"> -->
          </dd>

          <dt>flex-basis</dt>
          <dd>
            <input type="text" v-model="basis" placeholder="숫자만 입력 또는 auto"><button type="button" @click="setBasisBtn">적용</button>
          </dd>

          <!-- <dt>sample</dt>
          <dd>
            <span>
              <input type="radio" value="" name="" id="" v-model="" />
              <label for=""></label>
            </span>
          </dd> -->
        </dl>

      </div>


    </div>

  </div>
</template>

<script>
  export default {
    name : 'CodeGenerator' , 
    data(){
      return {
        count : 1 , 
        currentItem : null ,
        items : [
          { order : '0' } , 
          { order : '0' }
        ] , 
        direction : 'row' , 
        wrap : 'nowrap' , 
        jcontent : 'flex-start',
        aItems : 'stretch' , 
        aContent : 'stretch' ,
        order : '' ,
        grow : '' ,
        shrink : '' ,
        basis : '' , 
      }
    } ,
    methods : {
      addItem(){
        this.items.push({ order : 0 }) ;
      } ,
      deleteItem(){
        this.items.splice( this.items.length - 1, 1) ;  
      } ,
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
        }
      } ,
      setStyle( property ){
        if( property == 'order' ) {
          this.items[this.currentItem].order = this.order ; 
        } else if( property == 'flex-grow' ){
          this.items[this.currentItem].grow = this.grow ; 
        } else if( property == 'flex-shrink' ){
          this.items[this.currentItem].shrink = this.shrink ; 
        }
      } ,
      setOrder( od ){
        this.items[this.currentItem].order = od ; 
      } ,

      setOrderBtn() {
        console.log( '선택 :', this.currentItem ) ; 
        if( this.currentItem == null ) {
          alert( '아이템을 선택하세요' ) ; 
        } else {
          this.items[this.currentItem]['order'] = this['order'] ; 
          this.order = '' ;
        }
      } ,
      setGrowBtn() {
        console.log( '선택 :', this.currentItem ) ; 
        if( this.currentItem == null ) {
          alert( '아이템을 선택하세요' ) ; 
        } else {
          console.log( this.order ) ; 
          this.items[this.currentItem].grow = this.grow ; 
          this.grow = '' ;
        }
      } ,
      setShrinkBtn() {
        console.log( '선택 :', this.currentItem ) ; 
        if( this.currentItem == null ) {
          alert( '아이템을 선택하세요' ) ; 
        } else {
          console.log( this.order ) ; 
          this.items[this.currentItem].shrink = this.shrink ; 
          this.shrink = '' ;
        }
      } ,
      setBasisBtn() {
        console.log( '선택 :', this.currentItem ) ; 
        if( this.currentItem == null ) {
          alert( '아이템을 선택하세요' ) ; 
        } else {
          console.log( this.order ) ; 
          this.items[this.currentItem].basis = this.basis ; 
          this.basis = '' ;
        }
      }
    }
  }


  // https://www.cssportal.com/css-flexbox-generator/
  // https://cssflex-generator.netlify.app/
  // https://the-echoplex.net/flexyboxes/?fixed-height=on&display=flex&flex-direction=column&flex-wrap=nowrap&justify-content=flex-start&align-items=flex-start&align-content=stretch&order%5B%5D=0&flex-grow%5B%5D=0&flex-shrink%5B%5D=1&flex-basis%5B%5D=auto&align-self%5B%5D=auto&order%5B%5D=0&flex-grow%5B%5D=0&flex-shrink%5B%5D=1&flex-basis%5B%5D=auto&align-self%5B%5D=auto&order%5B%5D=0&flex-grow%5B%5D=0&flex-shrink%5B%5D=1&flex-basis%5B%5D=auto&align-self%5B%5D=auto

</script>

<style lang="scss" scoped>
  .flex-item {
    box-sizing: border-box ;
  }
  .selected {
    background-color: #ff2885 !important; 
  }
</style>
