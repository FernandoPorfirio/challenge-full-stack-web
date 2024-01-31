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

export async function getAllUser(
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

export async function createUser(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  const hasPermission = await validateUserTransaction(
    req.headers.authorization,
    1
  )

  if (!hasPermission) {
    throw new UnauthorizedError(
      'Authorization failed or user lacks necessary permissions.'
    )
  }

  next()
}

export async function createStudent(
  req: Request,
  _res: Response,
  next: NextFunction
) {
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

export async function getAllStudent(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  const hasPermission = await validateUserTransaction(
    req.headers.authorization,
    4
  )

  if (!hasPermission) {
    throw new UnauthorizedError(
      'Authorization failed or user lacks necessary permissions.'
    )
  }

  next()
}

export async function getSingleStudent(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  const hasPermission = await validateUserTransaction(
    req.headers.authorization,
    5
  )

  if (!hasPermission) {
    throw new UnauthorizedError(
      'Authorization failed or user lacks necessary permissions.'
    )
  }

  next()
}

export async function updateStudent(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  const hasPermission = await validateUserTransaction(
    req.headers.authorization,
    6
  )

  if (!hasPermission) {
    throw new UnauthorizedError(
      'Authorization failed or user lacks necessary permissions.'
    )
  }

  next()
}

export async function deleteStudent(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  const hasPermission = await validateUserTransaction(
    req.headers.authorization,
    7
  )

  if (!hasPermission) {
    throw new UnauthorizedError(
      'Authorization failed or user lacks necessary permissions.'
    )
  }

  next()
}
