// controllers/UserController.ts

import { Request, Response } from 'express'
import UserService from '../services/UserService'

class UserController {
  async getAllUsers(req: Request, res: Response): Promise<Response> {
    const users = await UserService.getAllUsers()
    return res.status(200).json(users)
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    const userData = req.body
    const userResponse = await UserService.createUser(userData)
    return res.status(200).json(userResponse)
  }
}

export default new UserController()
