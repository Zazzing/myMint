import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Common from '@/view/common'
import Index from '@/view/index'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Common',
      component: Common,
      children:[
      	{path:'index',name:'Index',component:Index},
      	{path:'',redirect:'index'}
      ]
    }
  ]
})
