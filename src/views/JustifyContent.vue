<template>
  <div>
    <div class="target">적용 요소 : Flex Container</div>
    <div class="desc">
      주축의 정렬과 flex item 사이의 간격을 제어하는 속성입니다. <br />
      flex-direction 속성이 row일 경우에는 X축 정렬을 제어하며, column 인 경우에는 Y축 정렬을 제어합니다.
    </div>
    <div class="desc">

      <table class="table">
        <colgroup>
          <col style="width:100%" />
        </colgroup>
        <tr>
          <th>flex-start <strong>기본값</strong></th>
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
        <div class="parent" :style="{justifyContent:currentStyle}">
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
  justify-content : {{ currentStyle }} ;
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
    name : 'JustifyContent' , 
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
          }
        ] ,
        currentStyle : 'flex-start' ,
      }
    } ,
    methods : {
      showStyle( arg ) {
        console.log( 'arg : ', arg ) ; 
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
</style>