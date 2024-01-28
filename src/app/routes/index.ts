import { Router } from 'express'

import UserRouter from '../controllers/UserController'
import AuthController from '../controllers/AuthController'

const router = Router()

router.get('/', (req, res) => {
  res.send('hi, iam alive!')
})

router.use('/auth', AuthController)
router.use('/user', UserRouter)

export default router
