import Vue from 'vue';
import VueRouter from 'vue-router';
import Auth from '@okta/okta-vue'
import Home from '../views/Home.vue';

const CALLBACK_PATH = '/admin'
const config = {
  clientId: '0oacc7r6cTCmxflYE4x6',
  issuer: 'https://dev-260185.okta.com/oauth2/default',
  redirectUri: 'http://localhost:8080/implicit/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
};

Vue.use(Auth, {...config})
Vue.use(VueRouter)

  const routes = [
  {
      path: '/',
      name: 'Home',
      component: Home
  },
  {
      path: CALLBACK_PATH,
      name: 'Administrator',
      component: () => import('../views/Admin.vue'),
      /*beforeEnter: () => {
        Vue.prototype.$auth.authRedirectGuard()
      }*/
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
