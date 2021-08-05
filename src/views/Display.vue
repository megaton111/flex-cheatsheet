<template>
  <div>
    <div class="target">적용 요소 : Flex Container</div>
    <div class="desc">
      flex container를 정의하는 속성입니다.<br />
      flex는 flex container, flex item(children) 2개의 타겟으로 나뉘어집니다. flex container는 flex item을 감싸는 부모 요소이며, 여러개의 flex item을 정렬하기 위해서는 flex container 부모 요소가 필수로 존재해야합니다.
      부모 요소 flex container 와 자식 요소 flex item에 적용하는 속성들이 구분되어 있으니 해당 요소에 맞는 속성들을 사용해야합니다.
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
        Flex Container
        <div class="parent" :style="{display:currentStyle}">
          <div class="child" v-for="i in 5" :key="i">{{ i }}</div>
        </div>
      </div>
      <div class="desc">
        검정색 선이 부모(flex container) 요소이며 파란색 박스가 하위 flex item 요소들입니다.<br />
      </div>
      <div class="code">
<pre>
.parent {
  display: {{ currentStyle }};
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
            name : 'flex' , 
            desc : '' ,
          } , 
          {
            name : 'inline-flex' ,
            desc : '' ,
          }
        ] ,
        currentStyle : 'flex' ,
      }
    } ,
    methods : {
      showStyle( arg ) { this.currentStyle = arg ; }
    }
  }
</script>

<style lang="scss" scoped>

</style>