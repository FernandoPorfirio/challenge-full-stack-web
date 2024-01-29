import { Router } from 'express'

import auth from '../middlewares/auth'

import UserController from '../controllers/UserController'

const router = Router()

router.get('/', auth, UserController.getAllUsers)
router.post('/', auth, UserController.createUser)

export default router
