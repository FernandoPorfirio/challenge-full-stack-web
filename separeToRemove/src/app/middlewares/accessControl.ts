import { Request, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'

import UserService from '../services/UserService'
import { UnauthorizedError } from '../helper/ApiError'

async function validateUserTransaction(
  authorization: string | undefined,
  transactionIdToFind: number
): Promise<boolean> {
  if (!authorization) {
    throw new UnauthorizedError('Invalid token')
  }

  const token = authorization.replace('Bearer', '').trim()

  const decodedToken = jwt.decode(token, { complete: true }) as {
    payload: JwtPayload
  } | null

  if (!decodedToken || !decodedToken.payload) {
    throw new UnauthorizedError('Invalid token')
  }

  const userId = decodedToken.payload.id

  const user = await UserService.findUserWithTransaction(userId)

  return user.accesLevel.some((accessLevel: { transaction: any[] }) =>
    accessLevel.transaction.some(
      (transaction) => transaction.id === transactionIdToFind
    )
  )
}

export async function getUser(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  const hasPermission = await validateUserTransaction(
    req.headers.authorization,
    2
  )

  if (!hasPermission) {
    throw new UnauthorizedError(
      'Authorization failed or user lacks necessary permissions.'
    )
  }

  next()
}

export async function createUser(req: Request, res: Response, next: NextFunction) {
  const hasPermission = await validateUserTransaction(
    req.headers.authorization,
    3
  )

  if (!hasPermission) {
    throw new UnauthorizedError(
      'Authorization failed or user lacks necessary permissions.'
    )
  }

  next()
}
