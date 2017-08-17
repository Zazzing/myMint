import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Common from '@/view/common'
import Index from '@/view/index'
import Film from '@/view/film'
import User from '@/view/user'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Common',
      component: Common,
      children:[
      	{path:'',redirect:'index'},
      	{path:'index',name:'Index',component:Index},
      	{path:'film',name:'Film',component:Film},
      	{path:'user',name:'User',component:User}
      ]
    }
  ]
})
