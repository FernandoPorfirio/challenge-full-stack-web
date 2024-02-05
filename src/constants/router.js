export const LOGIN = {
  path: '/login',
  children: [
    {
      path: '',
      name: 'login',
      meta: '',
      component: () => import('@/modules/login/views/LoginView.vue')
    }
  ],
  component: () => import('@/layouts/LoginLayout.vue')
}

export const HOME = {
  path: '/home',
  children: [
    {
      path: '',
      name: 'home',
      meta: '',
      component: () => import('@/views/HomeView.vue')
    }
  ],
  component: () => import('@/layouts/DefaultLayout.vue')
}

export const STUDENT_LIST = {
  path: '/studentList',
  children: [
    {
      path: '',
      name: 'studentList',
      meta: '',
      component: () => import('@/modules/student/views/StudentListView.vue')
    }
  ],
  component: () => import('@/layouts/DefaultLayout.vue')
}

export const STUDENT_CREATE = {
  path: '/studentCreate',
  children: [
    {
      path: '',
      name: 'studentCreate',
      meta: '',
      component: () => import('@/modules/student/views/StudentCreateView.vue')
    }
  ],
  component: () => import('@/layouts/DefaultLayout.vue')
}

