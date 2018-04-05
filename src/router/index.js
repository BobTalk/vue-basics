import Vue from 'vue'
import Router from 'vue-router'
import ParentChildren from '@/components/parent-children'
import Brother from "../components/brother"
import List from "../components/slot-list"
import Input from "../components/input-number"
import Directive from "../components/my-directive"
import SubTab from "../components/sub-tab"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ParentChildren',
      component: ParentChildren
    },
    {
      path: '/brother',
      name: 'Brother',
      component: Brother
    },
    {
      path: '/MyList',
      name: 'List',
      component: List
    },
    {
      path: '/Input',
      name: 'Input',
      component: Input
    },
    {
      path: '/Directive',
      name: 'Directive',
      component: Directive
    },
    {
      path: '/SubTab',
      name: 'SubTab',
      component: SubTab
    }
  ]
})
