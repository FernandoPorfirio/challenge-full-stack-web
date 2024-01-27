import { Router } from 'express'

import UserRouter from '../controllers/UserController'

const router = Router()

router.get('/', (req, res) => {
  res.send('hi, iam alive!')
})

router.use('/user',UserRouter)

export default router
