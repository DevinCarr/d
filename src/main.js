import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// Setup Service Worker for PWA
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').then(registration => {
    // Registration was successful
  }, err => {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err)
  })
}
