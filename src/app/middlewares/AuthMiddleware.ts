import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

// import IToken from '../interfaces/IToken'

export default function authMiddleware(
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
    jwt.verify(token, '@Bc1')
    next()
  } catch{
    return res.status(401).json({ error: 'Invalid token' })
  }
}
