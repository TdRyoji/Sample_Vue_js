// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

var app = new Vue({
  el: '#app',
  data: {
    message1: 'Hello Vue.js!',
    message2: 'You loaded this page on ' + new Date().toLocaleString()
  }
})