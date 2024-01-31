import express from 'express'
import Controller from '../auth/auth.controller'

const router = express.Router()
const authController = new Controller()

router.post('/', authController.tokenGenerate)

export default router
