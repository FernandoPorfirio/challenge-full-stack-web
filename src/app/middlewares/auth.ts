import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export default function auth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ error: 'Invalid token' })
  }

  const token = authorization.replace('Bearer', '').trim()

  try {
    jwt.verify(token, process.env.JWT_SECRET || 'secret')
    next()
  } catch {
    return res.status(401).json({ error: 'Invalid token' })
  }
}
