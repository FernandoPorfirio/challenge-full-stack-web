import { Request, Response, Router } from 'express'
import * as yup from 'yup'

import { ConflictError, BadRequestError } from '../helper/ApiError'
// import User from '../model/User'
import UserRepository from '../repositories/UserRepository'
// import IUser from '../interfaces/IUser'

class UserController {
  async getAllUsers(req: Request, res: Response): Promise<Response> {
    const user = await UserRepository.getUser()
    return res.status(200).json(user)
  }

  async createUser(req: Request, res: Response): Promise<Response> {
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

    const { id, name, email } = req.body
    const existEmail = await UserRepository.findUserByEmail(email)

    if (existEmail) {
      throw new ConflictError('Email address already exists')
    }

    await UserRepository.createUser(req.body)

    const userResponse = { id, name, email }

    return res.status(200).json(userResponse)
  }
}

export default new UserController()
