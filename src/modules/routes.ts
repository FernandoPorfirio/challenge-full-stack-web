import express from 'express'

import userRoutes from './user/user.routes'
import studentRoutes from './student/student.routes'

const router = express.Router()

router.use('/user', userRoutes)
router.use('/student', studentRoutes)

export default router
