// controllers/AuthController.ts

import { Request, Response } from 'express'
import AuthService from '../services/AuthService'

class AuthController {
  async auth(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    const authResult = await AuthService.authenticate(email, password)

    return res.status(200).json(authResult)
  }
}

export default new AuthController()
