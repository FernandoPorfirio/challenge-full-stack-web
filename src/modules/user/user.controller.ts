import { Request, Response } from 'express'
import * as yup from 'yup'

import {
  BadRequestError,
  ConflictError
} from '../../shared/helper/api-error.helper'
import User from './user.model'

export default class UserController {
  public async createUser(req: Request, res: Response) {
    const bodyValidation: yup.ObjectSchema<any> = yup.object().shape({
      name: yup
        .string()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters')
        .max(50, 'Name must be at most 50 characters'),
      email: yup
        .string()
        .required('Email is required')
        .min(4, 'Email must be at least 4 characters')
        .max(320, 'Email must be at most 320 characters')
        .email('Invalid email format'),
      password: yup
        .string()
        .required('Password is required')
        .max(60, 'Password must be at most 60 characters'),
      createdat: yup.date().default(() => new Date()),
      actived: yup.bool().default(true)
    })
    try {
      await bodyValidation.validate(req.body)
    } catch (error) {
      const yupError = error as yup.ValidationError
      throw new BadRequestError(yupError.message)
    }
    const { email } = req.body
    const emailVerify = await User.findOne({ where: { email } })
    if (emailVerify) {
      throw new ConflictError('Email address already exists')
    }

    const user: User = new User()
    user.name = req.body.name
    user.email = req.body.email
    user.password = req.body.password

    await user.save()

    delete user.password

    return res.status(200).json(user)
  }

  public async getAllUser(req: Request, res: Response) {
    const user = await User.find()
    return res.status(200).json(user)
  }
}
