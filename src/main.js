import Vue from 'vue'
import App from './App.vue'
import store from './store'

export const eventBus = new Vue();


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }


