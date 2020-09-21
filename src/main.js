import Vue from 'vue'
import App from './App.vue'
import store from './store'
import firebase from 'firebase'
import AsyncComputed from 'vue-async-computed'
import * as firebaseConfig from './firebase'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



Vue.config.productionTip = false
Vue.use(AsyncComputed)

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

firebase.initializeApp(firebaseConfig)

export const eventBus = new Vue();


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})


