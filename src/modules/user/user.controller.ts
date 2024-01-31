import { Request, Response } from 'express'

import { CreateUserValidator } from './user.validator'

import User from './user.model'

export default class UserController {
  public async createUser(req: Request, res: Response) {
    await CreateUserValidator(req.body)

    const user: User = new User()
    user.name = req.body.name
    user.email = req.body.email
    user.password = req.body.password

    await user.save()
    delete user.password
    return res.status(200).json(user)
  }

  public async getAllUser(req: Request, res: Response) {
    const user = await User.find()
    return res.status(200).json(user)
  }
}
