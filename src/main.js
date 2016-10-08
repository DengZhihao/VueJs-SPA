import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import filter from './filter'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'
import { configRouter } from './config_router'
import resourceGlobalSet from './resource_set'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(filter)

const router =new VueRouter({
  history:true,
  saveScrollPosition:true
})
configRouter(router)
Vue.http.options.emulateJSON=true
Vue.http.interceptors.push(resourceGlobalset)

sync(store,router)
router.start(App,'app')
