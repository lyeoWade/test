import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/user/login'
import Index from '@/components/home/index'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/home/index',
      name: 'index',
      component: Index
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
