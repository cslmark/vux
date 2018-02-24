// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux/HelloFromVux'
import SLContactDetail from './components/SLContactDetail/SLContactDetail'
import { ConfirmPlugin, AlertPlugin, LoadingPlugin } from 'vux'
import TabBarPage from './components/TabBarPage'
import Message from './components/Message/message'
import Mine from './components/Me/Mine'
import News from './components/News/news'

Vue.use(VueRouter)
Vue.use(ConfirmPlugin)
Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)

const routes = [
  {
    path: '/',
    name: 'TabBarPage',
    component: TabBarPage,
    children: [
      {
        path: '/HomeFromVux/HelloFromVux',
        name: 'Home',
        component: Home
      },
      {
        path: '/Message/message',
        name: 'Message',
        component: Message
      },
      {
        path: '/Me/Mine',
        name: 'Mine',
        component: Mine
      },
      {
        path: '/News/news',
        name: 'News',
        component: News
      }
    ]
  }, {
    path: '/SLContactDetail/:name/:phone/:index',
    name: 'SLContactDetail',
    component: SLContactDetail
  }
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
