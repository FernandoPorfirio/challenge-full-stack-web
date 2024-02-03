export const LOGIN = {
  path: '/login',
  name: 'login',
  component: () => import('@/views/loginView.vue')
}

export const STUDENT = {
  path: '/student',
  name: 'student',
  component: () => import('@/views/StudentView.vue')
}
