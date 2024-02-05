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

