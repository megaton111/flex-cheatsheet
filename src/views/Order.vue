<template>
  <div>
    <div class="target">적용 요소 : Flex Item</div>
    <div class="desc">
      flex item의 순서를 설정하는 속성입니다. <br />기본값은 0이며 flex-direction 속성의 방향을 기준으로 낮은 숫자를 먼저 배치하고 높은 숫자를 나중에 배치합니다.<br />
      '0', 양의 정수, 음의 정수를 사용할 수 있습니다.
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
          <div class="child" v-for="i in 5" :key="i" :class="{ orderTarget : i == 3 }" :style="{order : [ i == 3 ? currentStyle : 0 ] }">{{ i }}</div>  
        </div>
      </div>
      <div class="desc">
        검정색 선이 부모(flex container) 요소이며 파란색 박스가 하위 flex item 요소들입니다.<br />
        핑크색 박스가 orderTarget 클래스를 가진 박스이며 orderTarget 클래스에 order 속성을 적용합니다.
      </div>
      <div class="code">
<pre>
.parent {
  display : flex ;
  flex-wrap : wrap ; 
  height:300px ;
}
.orderTarget {
  order : {{ currentStyle }}
}
</pre>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'Order' , 
    data () {
      return {
        property : [ 
          {
            name : '-1' , 
            desc : '' ,
          } , 
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
  .orderTarget {
    background-color:rgb(255, 103, 230) !important;
  }
</style>