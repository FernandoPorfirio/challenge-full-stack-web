import { createRouter, createWebHistory } from 'vue-router'
import { HOME } from '@/constants/router'

import LoginRoutes from '@/modules/login/router'
import StudentRoutes from '@/modules/student/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [HOME, ...LoginRoutes, ...StudentRoutes]
})

export default router
