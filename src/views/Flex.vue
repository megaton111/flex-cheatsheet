<template>
  <div>
    <div class="target">적용 요소 : Flex Item</div>
    <div class="desc">
      flex 속성은 flex-grow, flex-shrink, flex-basis 속성의 값을 하나의 속성값으로 작성할 수 있는 단축 속성입니다. <br />
      아무 속성의 값도 선언하지 않은 경우에는 flex-grow : 0 ; flex-shrink : 1 ; flex-basis : auto ; 의 값이 적용되며 단축 속성으로 작성하면 flex : 0 1 auto ; 상태가 됩니다. <br />
      flex : none ; 으로 설정했을 경우에는 flex : 0 0 auto ; 로 설정한 것과 같습니다. 
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
          <!-- <div class="child" v-for="i in 5" :key="i">{{ i }}</div>   -->
          <div class="child" v-for="i in 5" :key="i" :class="{ flexTarget : i == 3 }" :style="{flex : [ i == 3 ? currentStyle : '' ] }">{{ i }}</div>  
        </div>
      </div>
      <div class="desc">
        검정색 선이 부모(flex container) 요소이며 파란색 박스가 하위 flex item 요소들입니다.<br />
      </div>
      <div class="code">
<pre>
.parent {
  display: flex; 
  height:300px ; 
}
.flexTarget {
  flex : {{ currentStyle }}
}
</pre>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'Flex' , 
    data () {
      return {
        property : [ 
          {
            name : '0 1 auto' , 
            desc : '' ,
          } , 
          {
            name : '0 1 30%' ,
            desc : '' ,
          } ,
          {
            name : '0 1 200px' , 
            desc : '' ,
          } , 
          {
            name : '1 0 30%' ,
            desc : '' ,
          } , 
          {
            name : 'none' ,
            desc : '' ,
          } , 
        ] ,
        currentStyle : '0 1 auto' ,
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
    height:300px ; 
  }
  .flexTarget {
    background-color:rgb(255, 103, 230) !important;
  }
</style>