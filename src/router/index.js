import Vue from 'vue'
import Router from 'vue-router'
import home from "@/views/home"
import category from '@/views/category'
import cart from '@/views/cart'
import find from '@/views/find'
import mine from '@/views/mine'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    // 分类
    {
    	path:'/category',
    	name:'category',
    	component:category
    },
    // 发现
    {
      path:'/find',
      name:'find',
      component:find
    },
    // 购物车
    {
       path:'/cart',
      name:'cart',
      component:cart
    },
    // 我的
    {
       path:'/mine',
      name:'mine',
      component:mine
    },
  ]
})
