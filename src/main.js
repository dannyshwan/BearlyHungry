import Vue from 'vue'
import App from './App.vue'
import VueAgile from 'vue-agile';
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

window.$ = window.jQuery = require('jquery');

Vue.config.productionTip = false;
Vue.use(VueAgile);
Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  components:{
    agile: VueAgile,
  },
  render: h => h(App),
}).$mount('#app')
