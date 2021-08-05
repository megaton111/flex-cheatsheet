<template>
  <div>
    <div class="target">적용 요소 : Flex Item</div>
    <div class="desc">
      flex item의 수축을 제어하는 속성입니다.<br />
      기본값은 1이며, 음수 값은 무효합니다. 보통 0 또는 1 값은 선언합니다. 값이 0일 경우에는 수축시키지 않겠다는 것을 의미합니다.<br />
      단축 속성 flex 사용 시 flex-grow 값을 생략하면 초기 값은 1로 설정됩니다.<br />
      flex-shrink 속성의 기본 값은 1이기 때문에 flex item은 기본적으로 수축하게됩니다. flex-shrink 값이 0인 경우 flex item 너비가 컨테이너를 초과 해도 수축하지 않습니다. flex-shrink 값이 0보다 큰 경우에는 flex item이 컨테이너를 초과했을 때 수축 값에 따라 수축하게 됩니다. 
      flex-container를 초과해서 공간이 모자라는 경우에는 수축하지만 공간이 모자라지 않는 경우에는 아무리 값을 올려도 수축하지 않습니다. 
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
          <div class="child" v-for="i in 5" :key="i" :class="{ shrinkTarget : i == 3 }" :style="{flexShrink :  [ currentStyle == 2 ? '' : currentStyle ] }">{{ i }}</div> 
          <!-- <div class="child" v-for="i in 5" :key="i" :class="{ shrinkTarget : i == 3 }" :style="{flexShrink :  currentStyle }">{{ i }}</div>  -->
          <!-- <div class="child" v-for="i in 5" :key="i" :class="{ shrinkTarget : i == 3 }" :style="{flexShrink :  [ i == 3 ? currentStyle : 1 ] }">{{ i }}</div>  -->
        </div>
      </div>
      <div class="desc">
        검정색 선이 부모(flex container) 요소이며 파란색 박스가 하위 flex item 요소들입니다.<br />
      </div>
      <div class="code">
<pre>
.parent {
  display : flex ;
  width:500px; 
  height:300px ;
}
.child {
  width : 300px ; 
  flex-shrink : {{ currentStyle == 2 ? 1 : currentStyle }} ;
}
.shrinkTarget {
  flex-shrink: {{ currentStyle }} ;
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
            name : '0' ,
            desc : '' ,
          } , 
          {
            name : '1' ,
            desc : '' ,
          } , 
          {
            name : '2' ,
            desc : '' ,
          } , 
        ] ,
        currentStyle : '0' ,
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
    width : 300px ; 
    flex-shrink: 1 ;
  }
  .shrinkTarget {
    flex-shrink: 2 ;
  }
</style>