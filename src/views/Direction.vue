<template>
  <div>
    <div class="target">적용 요소 : Flex Container</div>
    <div class="desc">
      flex item의 <strong>진행 축(주축)을 설정하는 속성</strong>입니다.<br />
      쉽게 말해서 flex item들이 flex container안에서 위치되는 방법(방향)을 지정하는 것 입니다.<br />
      flex를 학습할 때 진행 축(주축)과 교차 축을 이해해야합니다. 진행 축이란 flex item이 배치되는 축(x,y)을 의미합니다.<br/>
      교차 축이란 flex item들이 배치되는 방향과 90도 교차하는 축을 의미합니다. flex-direction의 값에 의해서 진행 축과 교차 축이 바뀌게 되며 진행 축과 교차 축을 기준으로 정렬 속성들이 구분되어져 있기 때문에 이해하고 넘어가야합니다. 
    </div>
    <div class="desc">
      <table class="table">
        <colgroup>
          <col style="width:250px" />
          <col style="width:auto" />
        </colgroup>
        <tr>
          <th>row <strong>기본값</strong></th>
          <td>수평으로 표시</td>
        </tr>
        <tr>
          <th>row-reverse</th>
          <td>row의 반대 방향으로 표시</td>
        </tr>
        <tr>
          <th>column</th>
          <td>수직축으로 표시</td>
        </tr>
        <tr>
          <th>column-reverse</th>
          <td>column의 반대 방향으로 표시</td>
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
        <div class="parent" :style="{flexDirection:currentStyle}">
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
  flex-direcition : {{ currentStyle }} ;
}
</pre>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'display' , 
    data () {
      return {
        property : [ 
          {
            name : 'row' , 
            desc : '' ,
          } , 
          {
            name : 'row-reverse' ,
            desc : '' ,
          } , 
          {
            name : 'column' ,
            desc : '' ,
          } , 
          {
            name : 'column-reverse' ,
            desc : '' ,
          }
        ] ,
        currentStyle : 'row' ,
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
  }
</style>