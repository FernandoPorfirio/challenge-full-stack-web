export const HOME = {
  path: '/home',
  name: 'home',
  component: () => import('@/views/HomeView.vue')
}

export const LOGIN = {
  path: '/login',
  name: 'login',
  component: () => import('@/modules/login/views/LoginView.vue')
}

export const STUDENT = {
  path: '/student',
  name: 'student',
  component: () => import('@/modules/student/views/StudentView.vue')
}
