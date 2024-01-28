import { Request, Response } from 'express'
import UserRepository from '../repositories/UserRepository'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

class UserController {
  async auth(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body
  const user = await UserRepository.findUserByEmail(email)

  if (!user) {
    return res.status(401).json({
      error: 'Unauthenticated'
    })
  }

  const isValidPassword = await bcrypt.compare(password, user.password)

  if (!isValidPassword) {
    return res.status(401).json({
      error: 'Unauthenticated'
    })
  }

  const token = jwt.sign({ id: user.id }, '@Bc1', { expiresIn: '1d' })

  return res.status(200).json({
    user: {
      name: user.name,
      email: user.email
    },
    token
  })
  }
}
export default new UserController()
