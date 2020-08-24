// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

var app1 = new Vue({
  el: '#app-1',
  data: {
    message1: 'Hello Vue.js!',
    message2: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    list: [
      { text: 'Learn Javascript' },
      { text: 'Learn Vue' },
      { text: 'Read 3 books a week'}
    ]
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    num: 0
  },
  methods: {
    handleClick: function () {
      this.num = (this.num + 1) % 3
    }
  }
})