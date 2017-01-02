// import Vue
// from vue
import Vue from 'vue';

// import App
// from
// App.vue
import App from './App.vue';

// Need to .vue, because only for .js ?
import Message from './Message.vue';

// why add here, because below we do render
// define global
// app namespace
// -msg
Vue.component("app-msg", Message);

// new Vue
new Vue({
  // element
  el: '#app',
  // render
  // fat arrow func
  // pass h, then run h(App)
  render: h => h(App)
})
