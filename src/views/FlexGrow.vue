<template>
  <div>
    <div class="target">적용 요소 : Flex Item</div>
    <div class="desc">
      flex item의 팽창을 제어하는 속성입니다.<br />
      기본값은 0이며, 음수 값은 무효합니다. 보통 0 또는 1 값은 선언합니다. 값이 0일 경우에는 팽창하지 않겠다는 것을 의미합니다.<br />
      단축 속성 flex 사용 시 flex-grow 값을 생략하면 초기 값은 1로 설정됩니다.
    </div>

    <div class="controller">
      <button type="button" class="btn" 
        v-for="({ name }) in property" 
        :key="name" 
        :class="{ active : currentStyle == name }"
        @click="showStyle( name )"
      >
        {{ name }}
      </button>
    </div>

    <div class="viewWrap">
      <div class="preview">
        <div class="parent">

          <!-- v if else로 -->
          <div class="child" v-for="i in 5" :key="i" :class="{ growTarget : i == 3 }" :style="{flexGrow : [ i == 3 ? currentStyle : 0 ] }">{{ i }}</div>  
        </div>
      </div>
      <div class="desc">
        검정색 선이 부모(flex container) 요소이며 파란색 박스가 하위 flex item 요소들입니다.<br />
        핑크색 박스가 growTarget 클래스를 가진 박스이며 growTarget 클래스에 flex-grow 속성을 적용합니다.<br />
        flex-grow 속성의 기본 값은 0이기 떄문에 기본적으로 팽창하지 않습니다. 
        flex-grow 값이 0이 아닌 경우에는 flex container 내부에 형성된 빈 공간을 flex-grow 값에 따라 flex item에 반영하여 남은 공간을 채우게 됩니다. 공간이 남지 않은 경우에는 아무리 값을 높게 주어도 컨테이너의 너비 이상으로 팽창하지 않습니다.
      </div>
      <div class="code">
<pre>
.parent {
  display : flex ;
  flex-wrap : wrap ; 
  height:300px ;
}
.growTarget {
  flex-grow : {{ currentStyle }}
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
    flex-wrap : wrap ; 
    height:300px ; 
  }
  .growTarget {
    background-color:rgb(255, 103, 230) !important;
  }
</style>