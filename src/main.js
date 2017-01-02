// import Vue
// from vue
import Vue from 'vue'

// import App
// from
// App.vue
import App from './App.vue'

// new Vue
new Vue({
  // element
  el: '#app',
  // render
  // fat arrow func
  // pass h, then run h(App)
  render: h => h(App)
})
