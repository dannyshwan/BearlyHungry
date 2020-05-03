import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';
import { Icon } from 'ant-design-vue';
import VueTypedJs from 'vue-typed-js';
import PhotoSwipe from 'vue-simple-photoswipe/dist/vue-simple-photoswipe'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

window.$ = window.jQuery = require('jquery');
export const $ = window.$;

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Icon);
Vue.use(VueTypedJs);
Vue.use(PhotoSwipe);

new Vue({
  el: '#app',
  components:{
    "vue-typed-js": VueTypedJs,
  },
  render: h => h(App),
}).$mount('#app')
