import Vue from 'vue'
import App from './App.vue'
import router from './router/index'; 
import store from './store/index'; 
import Meta from 'vue-meta';

Vue.config.productionTip = false;

import "@/assets/scss/_index.scss" ; 
Vue.use(Meta)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
