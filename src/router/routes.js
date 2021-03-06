import Home from '../views/Home.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/home',
      component: ()=>import('../views/home/index.vue')
    },
    {
      path: '/seleteColor',
      component: ()=>import('../views/seleteColor/index.vue')
    },
    {
        path: '/scratchableLatex',
        component: ()=>import('../views/scratchableLatex/index.vue')
    },
    {
      path: '/babylon',
      component: ()=>import('../views/babylon/index.vue')
    },
    {
      path: '/firstVue',
      component: ()=>import('../views/firstVue/index.vue')
    },
    {
      path: '/header',
      component: ()=>import('../views/secondVue/HeaderX.vue')
    },
    {
      path: '/root',
      component: ()=>import('../views/secondVue/RootX.vue')
    },
    {
      path: '/user',
      component: ()=>import('../views/secondVue/UserX.vue')
    },
    {
      path: '/text',
      component: ()=>import('../views/secondVue/TextX.vue')
    }
  ]

  export default routes