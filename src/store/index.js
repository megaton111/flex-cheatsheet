import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {  // 글로벌로 관리될 상태 값
    title: 'Flex Layout ',
    currentItem : null,
    items: [
      { order : '0', grow: '0', alignSelf : 'auto', shrink : '1', basis : 'auto' } , 
      { order : '0', grow: '0', alignSelf : 'auto', shrink : '1', basis : 'auto' } ,
      { order : '0', grow: '0', alignSelf : 'auto', shrink : '1', basis : 'auto' } ,
      { order : '0', grow: '0', alignSelf : 'auto', shrink : '1', basis : 'auto' } ,
      { order : '0', grow: '0', alignSelf : 'auto', shrink : '1', basis : 'auto' } ,
    ],
    property : {
      direction : [ 'row', 'column' ] , 
      wrap : [ 'nowrap', 'wrap', 'wrap-reverse' ] , 
      alignSelf : [ 'flex-start', 'flex-end', 'center', 'baseline', 'stretch', 'auto' ] , 
      alignContent : [ 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch' ] , 
      alignItems : [ 'flex-start', 'flex-end', 'center', 'baseline', 'stretch' ] , 
      justifyContent : [ 'flex-start', 'flex-end', 'center', 'space-between', 'space-around' ] , 
    } ,
    alert: '',
    order: '',
    grow: '',
    shrink: '',
    basis: '',
    direction : 'row' , 
    wrap : 'nowrap' , 
    justifyContent : 'flex-start',
    alignItems : 'stretch' , 
    alignContent : 'stretch' ,
  },
  getters: {  // 데이터를 가져오기만 할 수 있고 변경은 못한다.
    getTitle: state => state.title ,
  },
  mutations: {
    add : state => {
      console.log('add'); 
      state.items.push({ order : 0, self : 'auto' }) ;
    },
    delete: state => {
      console.log('delete');
      state.items.splice(state.items.length - 1, 1);
    },
    cancel: state => {
      console.log('cancel');
      state.currentItem = null;
    },
    selectedItem : ( state , idx ) => {
      console.log('selectedItem :', idx, state);
      if( idx == state.currentItem ) {
        state.currentItem = null ;
      } else {
        state.currentItem = idx ; 
        state.order = '' ; 
        state.grow = '' ; 
        state.shrink = '' ; 
        state.basis = '' ; 
        state.alert = '' ;
      }
    },
    setStyleBtn: ( state, style ) => {
      console.log('setStyleBtn in', state);
      console.log('style :', style);
      if( state.currentItem == null ) {
        state.alert = '적용할 아이템이 선택되지 않았습니다.' ;
      } else {
        state.items[state.currentItem][ style ] = state[ style ] ; 
        // state[ style ] = '' ;
        state.alert = '' ; 
      }
    },
    setStyleItem: (state, payload) => {
      console.log(state, payload);
      if( state.currentItem == null ) {
        state.alert = '적용할 아이템이 선택되지 않았습니다.' ;
      } else {
        state.items[state.currentItem][ payload.style ] = payload.value ; 
      }
      console.log('item :', state.items[state.currentItem]); 
    },
    setStyleContainer: (state, payload) => {
      console.log('setStyleContainer in', state, payload);
      state[payload.style] = payload.value ; 
    }
  },
  actions: {
    addCounter : context => context.commit( 'increment' ) ,
    subCounter : context => context.commit( 'decrement' )
  }
  
}); 