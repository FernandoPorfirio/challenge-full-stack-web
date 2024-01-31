import express from 'express'
import Controller from './user.controller'
// import auth from '../middlewares/auth'
// import * as accessControl from "../middlewares/accessControl"

const router = express.Router()
const UserController = new Controller()

router.post('/', UserController.createUser.bind(UserController))
router.get('/', UserController.getAllUser.bind(UserController))

export default router
