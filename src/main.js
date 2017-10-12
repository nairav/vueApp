// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ComponentA from './ComponentA.vue'
import ComponentB from './ComponentB.vue'

Vue.use(VueRouter)
const router = new VueRouter()
router.map({
  '/component-a': {
    component: ComponentA
  },
  '/component-b': {
    component: ComponentB
  }
})

router.start(App, '#container')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
