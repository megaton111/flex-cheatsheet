<template>
  <div>
    <div class="target">적용 요소 : Flex Container</div>
    <div class="desc">
      교차축에서 개별 flex item의 정렬을 설정하는 속성입니다.<br />
      flex item 요소에 각각 적용되기 때문에 flex container에 적용되어있는 align-items 속성보다 우선순위가 높습니다.
    </div>
    <div class="desc">

      <table class="table">
        <colgroup>
          <col style="width:250px" />
          <col style="width:auto" />
        </colgroup>
        <tr>
          <th>auto <strong>기본값</strong></th>
          <td>align-items 속성을 상속받습니다.</td>
        </tr>
        <tr>
          <th>flex-start</th>
          <td>줄의 시작점으로 정렬합니다.</td>
        </tr>
        <tr>
          <th>flex-end</th>
          <td>줄의 끝점으로 정렬합니다.</td>
        </tr>
        <tr>
          <th>center</th>
          <td>가운데로 정렬합니다.</td>
        </tr>
        <tr>
          <th>baseline</th>
          <td>줄의 문자 기준선에 정렬합니다.</td>
        </tr>
        <tr>
          <th>stretch</th>
          <td>교차축을 채우기위해 flex item을 늘립니다.</td>
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
        <div class="parent">
          <!-- <div class="child" v-for="i in 5" :key="i">{{ i }}</div>   -->
          <div class="child" v-for="i in 5" :key="i" :class="{ alignSelfTarget : i == 3 }" :style="{alignSelf : [ i == 3 ? currentStyle : '' ] }">{{ i }}</div>  
        </div>
      </div>
      <div class="desc">
        검정색 선이 부모(flex container) 요소이며 파란색 박스가 하위 flex item 요소들입니다.<br />
      </div>
      <div class="code">
<pre>
.parent {
  display: flex; 
  flex-wrap : wrap ; 
  height:300px ; 
  align-items: center ;
}
.alignSelfTarget {
  align-self : {{ currentStyle }}
}
</pre>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'AlignSelf' , 
    data () {
      return {
        property : [ 
          {
            name : 'auto' , 
            desc : '' ,
          } , 
          {
            name : 'stretch' ,
            desc : '' ,
          } ,
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
        ] ,
        currentStyle : 'auto' ,
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
    align-items: center ;
  }
</style>