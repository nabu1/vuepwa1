import Vue from 'vue'
import Router from 'vue-router'
// import Kumpo from './components/Kumpo/Kumpo.vue'
import Kumpo from '@/components/Kumpo/Kumpo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'kumpo', component: Kumpo }
  ]
})
