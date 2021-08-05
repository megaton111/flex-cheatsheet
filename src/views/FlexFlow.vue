<template>
  <div>
    <div class="target">적용 요소 : Flex Container</div>
    <div class="desc">
      flex item의 flex-direction속성과 flex-wrap 속성의 값을 한 번에 작성할 수 있는 속성입니다.<br />
      flex-flow: &lt;flex-direction&gt; || &lt;flex-wrap&gt;
    </div>
    <div class="desc">

      <table class="table">
        <colgroup>
          <col style="width:100%" />
        </colgroup>
        <tr>
          <th>row nowrap <strong>기본값</strong></th>
        </tr>
        <tr>
          <th>column-reverse</th>
        </tr>
        <tr>
          <th>column wrap</th>
        </tr>
        <tr>
          <th>row-reverse wrap-reverse</th>
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
        <div class="parent" :style="{flexFlow:currentStyle}">
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
  flex-flow : {{ currentStyle }} ;
}
.child {
  width : 250px ; 
  height : 20%  ; 
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
            name : 'row wrap' , 
            desc : '' ,
          } , 
          {
            name : 'column-reverse' ,
            desc : '' ,
          } , 
          {
            name : 'column wrap' ,
            desc : '' ,
          } , 
          {
            name : 'row-reverse wrap-reverse' ,
            desc : '' ,
          }
        ] ,
        currentStyle : 'row wrap' ,
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
      height :20%  ; 
    }
  }
</style>