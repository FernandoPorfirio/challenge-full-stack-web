import { Router } from 'express'

import auth from '../middlewares/auth'
import * as accessControl from "../middlewares/accessControl";

import UserController from '../controllers/UserController'

const router = Router()

router.get('/', auth, accessControl.getUser, UserController.getAllUsers)
router.post('/', auth, accessControl.createUser, UserController.createUser)

export default router
