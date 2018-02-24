import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SLContactDetail from '@/components/SLcontactDetail/SLContactDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/SLContactDetail/:name/:phone',
      name: 'SLContactDetail',
      component: SLContactDetail
    }
  ]
})
