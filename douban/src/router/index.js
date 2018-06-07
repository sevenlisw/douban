import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Book from '../components/book/book'
import Broadcast from '../components/broadcast/broadcast'
import Group from '../components/group/group'
import Shouye from '../components/shouye/shouye'
import 	Vedio from '../components/book/child/vedio'
import 	Read from '../components/book/child/read'
import 	Tv from '../components/book/child/tv'
import 	City from '../components/book/child/city'
import 	Music from '../components/book/child/music'
import Detail from '../components/group/detail'
import Erro from '../components/erro'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/v',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/book',
      component: Book,
      children:[
      	{path:'video',component:Vedio},
      	{path:'read',component:Read},
      	{path:'tv',component:Tv},
      	{path:'city',component:City},
      	{path:'music',component:Music},
      ]
      	
      
    },
    {
      path: '/broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      component: Group
    },
    {
      path: '/shouye',
      component: Shouye
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '*',
      component: Erro
    },
  ]
})
