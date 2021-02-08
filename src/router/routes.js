import Home from '../views/Home.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/playground',
    name: 'playground',
    component: () => import('../views/playground/index.vue'),
  },
  {
    path: '/',
    redirect: () => '/home',
  },
]

export default routes
