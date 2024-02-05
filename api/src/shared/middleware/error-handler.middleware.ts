import { Request, Response, NextFunction } from 'express'
import { ApiError } from '../helper/api-error.helper'

class ErrorHandlerMiddleware {
  private defaultStatusCode: number
  private defaultMessage: string

  constructor(
    defaultStatusCode: number = 500,
    defaultMessage: string = 'Internal server Error!'
  ) {
    this.defaultStatusCode = defaultStatusCode
    this.defaultMessage = defaultMessage
  }

  public handle(
    err: Error & Partial<ApiError>,
    _req: Request,
    res: Response,
    _next: NextFunction
  ) {
    let statusCode = err.statusCode ?? this.defaultStatusCode
    let message = err.message ?? this.defaultMessage

    if (err instanceof ApiError) {
      statusCode = err.statusCode
      message = err.message
    }

    return res.status(statusCode).json({ message })
  }
}

export default new ErrorHandlerMiddleware()
