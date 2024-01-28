import { Router } from 'express'

import AuthRouter from './authRoutes'
import UserRouter from './userRoutes'

const router = Router()

router.get('/', (_req, res) => {
  res.send('hi, iam alive!')
})

router.use('/auth', AuthRouter)
router.use('/user', UserRouter)

export default router
