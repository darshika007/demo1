import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/HelloWorld'
import Login from '@/view/Login/Login.vue'
import Registration from '@/view/Registration/Registration.vue'
import Deals from '@/view/Deals/Deals.vue'
import Dealbyloc from '@/view/Dealbyloc/Dealbyloc.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path : '/Register',
      name: 'Registration',
      component : Registration
    },
    {
      path : '/Deals',
      name: 'Deals',
      component : Deals
    },
    {
      path : '/Dealbyloc',
      name: 'Dealbyloc',
      component: Dealbyloc
    }
    

  ]
})
