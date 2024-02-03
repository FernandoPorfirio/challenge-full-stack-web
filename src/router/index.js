import { createRouter, createWebHistory } from 'vue-router'
import * as ROUTES from '@/constants/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      ROUTES.LOGIN,
      ROUTES.STUDENT
  ]
})

export default router
