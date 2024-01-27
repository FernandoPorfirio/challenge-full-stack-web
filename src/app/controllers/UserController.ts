import { Request, Response, Router } from 'express'
import User from '../entities/User'
import UserRepository from '../repositories/UserRepository'
import IUser from '../interfaces/IUser'

const userRouter = Router()

userRouter.get('/', async (req: Request, res: Response): Promise<Response> => {
  const user = await UserRepository.getUser()
  return res.status(200).json(user)
})

export default userRouter
