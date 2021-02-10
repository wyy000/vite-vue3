export default [
  {
    path: 'select',
    name: 'select',
    component: () => import('../views/playground/select.vue'),
  },
  {
    path: 'table',
    name: 'table',
    component: () => import('../views/playground/table.vue'),
  },
  {
    path: 'table-tbodies',
    name: 'table-tbodies',
    component: () => import('../views/playground/table-tbodies.vue'),
  },
  {
    path: '',
    redirect: () => '/playground/table',
  },
]
