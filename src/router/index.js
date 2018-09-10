import Vue from 'vue'
import Router from 'vue-router'
import ParentChildren from '@/components/parent-children/parent-children'
import Brother from "../components/brother/brother"
import Tablespan from "../components/tableSpan/colSpan"
import List from "../components/list-slot/slot-list"
import Input from "../components/input/input-number"
import Directive from "../components/directive/my-directive"
import SubTab from "../components/sub-tab"
import Tree from "../components/tree"
import Render from "../components/render/render"
import Table from "../components/table/table-span"
import lunbo from "../lunbo/lunbo"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ParentChildren',
      component: ParentChildren
    },
    {
      path: '/lunbo',
      name: 'lunbo',
      component: lunbo
    },
    {
      path: '/brother',
      name: 'Brother',
      component: Brother
    },{
      path: '/tablespan',
      name: 'tablespan',
      component: Tablespan
    },{
      path: '/Table',
      name: 'Table',
      component: Table
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
    },
    {
      path: '/Tree',
      name: 'Tree',
      component: Tree
    },
    {
      path: '/Render',
      name: 'Render',
      component: Render
    }
  ]
})
