import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/modules/sign/in'
import SignUp from '@/modules/sign/up'
import Menu from '@/modules/menu/menu'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: SignIn
    },
    {
        path: '/signIn',
        name: 'signIn',
        component: SignIn
    },
    {
        path: '/signUp',
        name: 'signUp',
        component: SignUp
    },
    {
        path: '/menu',
        name: 'menu',
        component: Menu
    }
  ]
})
