<template>
  <div>
    <div class="target">적용 요소 : Flex Container</div>
    <div class="desc">
      flex item의 줄 바꿈을 제어합니다. 여러 줄일 경우 어떻게 보여줄지를 결정합니다.
    </div>
    <div class="desc">

      <table class="table">
        <tr>
          <th>nowrap <strong>기본값</strong></th>
          <td>한 줄로 표시, flex item들의 크기는 flex container에 들어갈 수 있는 크기로 축소됩니다.</td>
        </tr>
        <tr>
          <th>wrap</th>
          <td>여러 줄로 표시, flex item들의 width 합계가 flex container width보다 큰 경우, flex item들을 여러 줄로 표시합니다.</td>
        </tr>
        <tr>
          <th>wrap-reverse</th>
          <td>wrap의 역방향으로 여러 줄 표시</td>
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
        <div class="parent" :style="{flexWrap:currentStyle}">
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
  height:300px ;
  flex-wrap : {{ currentStyle }} ;
}
.child {
  width : 250px ; 
}
</pre>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'FlexWrap' , 
    data () {
      return {
        property : [ 
          {
            name : 'nowrap' , 
            desc : '' ,
          } , 
          {
            name : 'wrap' ,
            desc : '' ,
          } , 
          {
            name : 'wrap-reverse' ,
            desc : '' ,
          }
        ] ,
        currentStyle : 'nowrap' ,
      }
    } ,
    methods : {
      showStyle( arg ) {
        this.currentStyle = arg ; 
        console.log( 'show style :', arg ) ;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .parent {
    display: flex; 
    height:300px ; 
    .child {
      width : 250px ; 
    }
  }
</style>