import express from 'express'

import tokenValidation from '../shared/middleware/auth'

import authRoutes from './auth/auth.routes'
import userRoutes from './user/user.routes'
import studentRoutes from './student/student.routes'

const router = express.Router()

router.use('/auth', authRoutes)
router.use('/user', tokenValidation, userRoutes)
router.use('/student', tokenValidation, studentRoutes)

export default router
