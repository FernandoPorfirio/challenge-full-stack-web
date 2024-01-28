import { Request, Response } from 'express'
import { UnauthorizedError } from '../helper/ApiError'
import UserRepository from '../repositories/UserRepository'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

class AuthController {
  async auth(req: Request, res: Response): Promise<Response> {

    const { email, password } = req.body
    const user = await UserRepository.findUserByEmail(email)

    if (!user) {
      throw new UnauthorizedError('Invalid credentials')
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      throw new UnauthorizedError('Invalid credentials')
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '1d' }
    )

    return res.status(200).json({
      user: {
        name: user.name,
        email: user.email
      },
      token
    })
  }
}
export default new AuthController()
