import { Request, Response, Router } from 'express'
import User from '../entities/User'
import UserRepository from '../repositories/UserRepository'
import IUser from '../interfaces/IUser'

class UserController {
  async getAllUsers(req: Request, res: Response): Promise<Response> {
    const user = await UserRepository.getUser()
    return res.status(200).json(user)
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    const { id, name, email } = req.body
    const existEmail = await UserRepository.findUserByEmail(email)

    if (existEmail) {
      return res.status(409).json({
        error: 'Email address already exists'
      })
    }

    await UserRepository.createUser(req.body)

    const userResponse = { id, name, email }

    return res.status(200).json(userResponse)
  }
}

export default new UserController()
