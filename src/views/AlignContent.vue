<template>
  <div>
    <div class="target">적용 요소 : Flex Container</div>
    <div class="desc">
      여러줄의 교차축 정렬과 flex item 사이 간격을 제어하는 속성입니다.  flex-wrap : wrap 스타일이 적용된 경우에만 적용되는 속성이며 여러 줄이 발생하는 경우 align-items 속성 보다 우선순위가 높습니다.
    </div>
    <div class="desc">

      <table class="table">
        <colgroup>
          <col style="width:100%" />
        </colgroup>
        <tr>
          <th>flex-start</th>
        </tr>
        <tr>
          <th>flex-end</th>
        </tr>
        <tr>
          <th>center</th>
        </tr>
        <tr>
          <th>space-between</th>
        </tr>
        <tr>
          <th>space-around</th>
        </tr>
        <tr>
          <th>stretch <strong>기본값</strong></th>
        </tr>
      </table>
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
        <div class="parent" :style="{alignContent:currentStyle}">
          <div class="child" v-for="i in 5" :key="i">{{ i }}</div>  
        </div>
      </div>
      <div class="desc">
        검정색 선이 부모(flex container) 요소이며 파란색 박스가 하위 flex item 요소들입니다.<br />
      </div>
      <div class="code">
<pre>
.parent {
  display : flex ;
  flex-wrap : wrap ; 
  height:300px ;
  align-content : {{ currentStyle }} ;
}
.child {
  width : 40% ; 
}
</pre>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'AlignContent' , 
    data () {
      return {
        property : [ 
          {
            name : 'flex-start' , 
            desc : '' ,
          } , 
          {
            name : 'flex-end' ,
            desc : '' ,
          } , 
          {
            name : 'center' ,
            desc : '' ,
          } , 
          {
            name : 'space-between' ,
            desc : '' ,
          } , 
          {
            name : 'space-around' ,
            desc : '' ,
          } , 
          {
            name : 'stretch' ,
            desc : '' ,
          }
        ] ,
        currentStyle : 'stretch' ,
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
    .child {
      width : 40% ; 
    }
  }
</style>