import Vue from 'vue'
import App from './App.vue'
import store from './store'
import firebase from 'firebase'
import AsyncComputed from 'vue-async-computed'
import * as firebaseConfig from './firebase'

Vue.config.productionTip = false
Vue.use(AsyncComputed)

firebase.initializeApp(firebaseConfig)

export const eventBus = new Vue();


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})


