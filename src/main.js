// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

var app1 = new Vue({
  el: '#app1',
  data: {
    message1: 'Hello Vue.js!',
    message2: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app2 = new Vue({
  el: '#app2',
  data: {
    list: [
      { text: 'Learn Javascript' },
      { text: 'Learn Vue' },
      { text: 'Read 3 books a week'}
    ]
  }
})