import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

import { UnauthorizedError } from '../helper/api-error.helper'

dotenv.config()

export default function tokenValidation(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers

  if (!authorization) {
    throw new UnauthorizedError('Invalid token')
  }

  const token = authorization.replace('Bearer', '').trim()

  try {
    jwt.verify(token, process.env.JWT_SECRET || 'secret')
    next()
  } catch {
    throw new UnauthorizedError('Invalid token')
  }
}
