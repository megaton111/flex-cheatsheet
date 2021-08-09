import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {  // 글로벌로 관리될 상태 값
    title: 'Flex Layout ',
    counter: 0,
    items: [
      { order : '0', grow: '0', self : 'auto', shrink : '1', basis : 'auto' } , 
      { order : '0', grow: '0', self : 'auto', shrink : '1', basis : 'auto' } ,
      { order : '0', grow: '0', self : 'auto', shrink : '1', basis : 'auto' } ,
      { order : '0', grow: '0', self : 'auto', shrink : '1', basis : 'auto' } ,
      { order : '0', grow: '0', self : 'auto', shrink : '1', basis : 'auto' } ,
    ]
  },
  getters: {  // 데이터를 가져오기만 할 수 있고 변경은 못한다.
    getTitle: state => state.title ,
  },
  mutations: {
    addItems: state => {
      console.log('addItems'); 
      state.items.push({ order : 0, self : 'auto' }) ;
    } , 
  },
  actions: {
    addCounter : context => context.commit( 'increment' ) ,
    subCounter : context => context.commit( 'decrement' )
  }
  
}); 