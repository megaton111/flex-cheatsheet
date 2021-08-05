<template>
  <div>
    <div class="target">적용 요소 : Flex Item</div>
    <div class="desc">
      flex item의 너비 기본값을 적용하는 속성입니다.<br />
      기본값은 auto이며, flex item 요소가 flex-grow, flex-shrink 속성에 의해 팽창/수축하기 이전의 기본 크기를 명시하는 속성입니다.<br/>
      flex item에 width/height 값을 적용하는 것은 flex-basis 값을 적용하는 것과 결과적으로 동일합니다. 동일한 값을 width/height와 flex-basis에 적용하게되면 flex-basis 값은 width 값을 덮어 쓰게 됩니다. 
    </div>

    <div class="controller">
      <button type="button" class="btn" 
        v-for="({ name }) in property" 
        :key="name" 
        :class="{ active : currentStyle == name }"
        @click="showStyle( name )"
      >
        {{ name == '2' ? '3번째 박스만 shrink : 2 / 나머지 박스는 shrink : 1' : name }}
      </button>
    </div>

    <div class="viewWrap">
      <div class="preview">
        <div class="parent">

          <!-- v if else로 -->
          <!-- <div class="child" v-for="i in 5" :key="i" :class="{ shrinkTarget : i == 3 }" :style="{flexShrink :  [ currentStyle == 2 ? '' : currentStyle ] }">{{ i }}</div>  -->
          <div class="child" v-for="i in 5" :key="i" :class="{ shrinkTarget : i == 3 }" :style="{flexBasis :  currentStyle }">{{ currentStyle }}</div> 
          <!-- <div class="child" v-for="i in 5" :key="i" :class="{ shrinkTarget : i == 3 }" :style="{flexShrink :  [ i == 3 ? currentStyle : 1 ] }">{{ i }}</div>  -->
        </div>
      </div>
      <div class="desc">
        검정색 선이 부모(flex container) 요소이며 파란색 박스가 하위 flex item 요소들입니다.<br />
        flex basis를 300px로 선택했을 경우 flex-item 들이 300px로 늘어나지 않는 이유는 flex-shrink 값이 기본적으로 1이기 때문에 flex-container 영역에 맞게 축소된 것입니다. 
        flex item들의 flex-shrink 값을 0으로 주게되면 flex container 영역을 벗어나게 될 것 입니다.
      </div>
      <div class="code">
<pre>
.parent {
  display : flex ;
  width:500px; 
  height:300px ;
}
.child {
  flex-basis : {{ currentStyle }} ;
}
</pre>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'FlexGrow' , 
    data () {
      return {
        property : [ 
          {
            name : 'auto' ,
            desc : '' ,
          } , 
          {
            name : '100px' ,
            desc : '' ,
          } , 
          {
            name : '300px' ,
            desc : '' ,
          } , 
        ] ,
        currentStyle : 'auto' ,
      }
    } ,
    methods : {
      showStyle( arg ) {
        this.currentStyle = arg ; 
      }
    }
  }
</script>

<style lang="scss" scoped>
  .parent {
    display: flex; 
    width:500px ; 
    height:300px ; 
  }
  .child{
  }
  .shrinkTarget {
  }
</style>