<template>
<div>
  <div class="desc">
    Flex 속성을 공부하기 위해 만든 사이트입니다. <br />
    Flexbox는 레이아웃을 좀 더 편하고 쉽게 설계할 수 있도록 제공해주는 새로운 Layout 스타일입니다. <br />
    사이즈가 동적으로 변하는 레이아웃일 때에도 유연하게 Layout을 설계할 수 있습니다. 
  </div>
  <div class="desc">
    Flex Layout을 공부하기 전에 flex container와 flex item에 대한 이해가 필요합니다. <br>
    Flexbox는 Table의 tr, td 개념과 유사합니다. flexbox는 flex container( tr )와 flex item( td )로 이루어집니다. <br>
    div 요소에 display : flex ; 를 설정하게 되면 해당 div는 flex container가 되고 자식 요소는 자동으로 flex item이 되어집니다. 
    
    <dl>
      <dt>flex container</dt>
      <dd>
        flex container는 flex item의 면적, 방향, 정렬을 결정하는 부모 요소입니다. <br />
        flex container는 flex 와 inline-flex로 설정할 수 있으며 flex 값은 블럭엘리먼트의 성질을 갖게되며 inline-flex는 inline-block 형태로 표시됩니다.
      </dd>
      <dt>flex item</dt>
      <dd>
        flex item은 flex container 공간을 팽창/수축 속성의 값들에 의해 서로 나누어 갖게 됩니다. <br />
        flex-grow, flex-shrink, flex-basis의 속성들을 사용하여 개별적으로 팽창/수축 값을 지정할 수 있습니다.<br />
      </dd>
    </dl>
  </div>
</div>
</template>

<script>
  export default {
    name : 'Intro' ,
  }
</script>

<style lang="scss" scoped>
dl {
  padding: 30px 0 ; 
  dt {
    font-weight: 700 ;
    margin-bottom: 10px ;
  }
  dd {
    margin-bottom: 30px ;
  }
}
</style>