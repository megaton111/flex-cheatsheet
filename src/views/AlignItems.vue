<template>
  <div>
    <div class="target">적용 요소 : Flex Container</div>
    <div class="desc">
      align-items 속성은 주축과 교차하는 교차 축 정렬을 제어합니다.<br />
      flex-direction 속성이 row일 경우에는 Y축 정렬을 제어하며, column 인 경우에는 X축 정렬을 제어합니다.<br />
      flex-direction:row 상태에서 flex item의 높이를 100%로 렌더링하는 이유가 이것 때문입니다.
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
          <th>baseline</th>
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
        <div class="parent" :style="{alignItems:currentStyle}">
          <div class="child" v-for="i in 5" :key="i">{{ i }}</div>  
        </div>
      </div>
      <div class="desc">
        flex-direction : row 속성일 경우 적용한 모습입니다. <br />
        검정색 선이 부모(flex container) 요소이며 파란색 박스가 하위 flex item 요소들입니다.<br />
      </div>
      <div class="code">
<pre>
.parent {
  display : flex ;
  flex-direction : row ; 
  height:300px ;
  align-items : {{ currentStyle }} ;
}
</pre>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'AlignItems' , 
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
            name : 'baseline' ,
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
    height:300px ; 
  }
</style>