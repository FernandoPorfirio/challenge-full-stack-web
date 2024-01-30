import { Request, Response, NextFunction } from 'express'
import { ApiError } from '../helper/api-error.helper'

export default function errorHandler(
  err: Error & Partial<ApiError>,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  const statusCode = err.statusCode ?? 500
  const message = err.statusCode
    ? err.message ?? 'Internal server Error!'
    : 'Internal server Error!'

  return res.status(statusCode).json({ message })
}
