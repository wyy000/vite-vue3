import Home from '../views/Home.vue'

import playground from './playground'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/playground',
    component: () => import('../views/playground/index.vue'),
    children: playground,
  },
  {
    path: '/',
    redirect: () => '/home',
  },
]

console.log(routes)

export default routes
