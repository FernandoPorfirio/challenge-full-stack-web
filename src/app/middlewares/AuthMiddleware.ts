import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401)
  }

  const token = authorization.replace('Bearer', '').trim()

  try {
    const data = jwt.verify(token, '@Bc1')
  } catch {
    return res.status(401)
  }

  next()
}
