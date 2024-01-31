import express from 'express'
import Controller from './user.controller'
import * as accessControl from "../../shared/middleware/accessControl";

const router = express.Router()
const UserController = new Controller()

router.post('/',accessControl.createUser, UserController.createUser.bind(UserController))
router.get('/',accessControl.getAllUser, UserController.getAllUser.bind(UserController))

export default router
