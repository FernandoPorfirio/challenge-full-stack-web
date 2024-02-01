import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

import { UnauthorizedError } from '../../shared/helper/api-error.helper'

import User from '../user/user.model'

dotenv.config()

export default class AuthController {
  public async tokenGenerate(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })

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
      { expiresIn: process.env.JWT_EXPIRE || '1d' }
    )

    const authResult: {} = {
      user: {
        name: user.name,
        email: user.email
      },
      token
    }

    return res.status(200).json(authResult)
  }
}
