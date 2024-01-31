import { Request, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import User from '../../modules/user/user.model'
import { UnauthorizedError } from '../helper/api-error.helper'

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

  const id: number = parseInt(decodedToken.payload.id, 10)

  const user = await User.findOne({
    where: { id },
    relations: ['accesLevel.transaction']
  })

  return user.accesLevel.some((accessLevel: { transaction: any[] }) =>
    accessLevel.transaction.some(
      (transaction) => transaction.id === transactionIdToFind
    )
  )
}

function PermissionMiddleware(transactionIdToFind: number) {
  return async function (req: Request, res: Response, next: NextFunction) {
    const hasPermission = await validateUserTransaction(
      req.headers.authorization,
      transactionIdToFind
    )

    if (!hasPermission) {
      throw new UnauthorizedError(
        'Authorization failed or user lacks necessary permissions.'
      )
    }

    next()
  }
}

export const createUser = PermissionMiddleware(1)
export const getAllUser = PermissionMiddleware(2)
export const createStudent = PermissionMiddleware(3)
export const getAllStudent = PermissionMiddleware(4)
export const getSingleStudent = PermissionMiddleware(5)
export const updateStudent = PermissionMiddleware(6)
export const deleteStudent = PermissionMiddleware(7)
