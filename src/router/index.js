import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: '首页',
        icon: 'dashboard'
      }
    }]
  },
  {
    path: '/algorithm',
    component: Layout,
    redirect: '/algorithm/mortgage',
    name: 'Algorithm',
    meta: {
      title: '算法管理',
      icon: 'table'
    },
    children: [{
        path: 'mortgage',
        name: 'Mortgage',
        meta: {
          title: '房贷管理'
        },
        component: () => import('@/views/algorithm/Mortgage/Manage/')
      },
      {
        path: 'houseUpdate',
        name: 'HouseUpdate',
        hidden: true,
        meta: {
          title: '房税管理'
        },
        component: () => import('@/views/algorithm/HouseTax/Update/')
      },
      {
        path: 'houseTax',
        name: 'HouseTax',
        meta: {
          title: '房税管理'
        },
        component: () => import('@/views/algorithm/HouseTax/Manage/')
      },
      {
        path: 'houseTaxAdd',
        name: 'HouseTaxAdd',
        hidden: true,
        meta: {
          title: '房税算法'
        },
        component: () => import('@/views/algorithm/HouseTax/Compute/')
      },
      {
        path: 'mortgageAdd',
        name: 'MortgageAdd',
        hidden: true,
        meta: {
          title: '房贷算法'
        },
        component: () => import('@/views/algorithm/Mortgage/Compute/')
      }
    ]
  },
  {
    path: '/news',
    component: Layout,
    redirect: '/news/add',
    name: 'News',
    meta: {
      title: '文章管理',
      icon: 'documentation'
    },
    children: [{
        path: 'add',
        name: 'NewsAdd',
        component: () => import('@/views/news/Add/index'),
        meta: {
          title: '新建文章'
        }
      },
      {
        path: 'manage',
        name: 'NewsManage',
        component: () => import('@/views/news/Manage/index'),
        meta: {
          title: '文章列表'
        }
      },
      {
        path: 'update',
        name: 'NewsUpdate',
        hidden: true,
        component: () => import('@/views/news/Update/index'),
        meta: {
          title: '查看修改'
        }
      }
    ]
  },
  {
    path: '/userManage',
    component: Layout,
    redirect: '/userManage/add',
    name: 'UserManage',
    children: [{
      path: 'manage',
      name: 'manage',
      component: () => import('@/views/userManage/index'),
      meta: {
        title: '用户管理',
        icon: 'user'
      }
    }]
  },
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'example' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
