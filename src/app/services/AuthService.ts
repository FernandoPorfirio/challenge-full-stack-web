import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserRepository from '../repositories/UserRepository';
import { UnauthorizedError } from '../helper/ApiError';

class AuthService {
  async authenticate(email: string, password: string): Promise<{ user: { name: string; email: string }, token: string }> {
    const user = await UserRepository.findUserByEmail(email);

    if (!user) {
      throw new UnauthorizedError('Invalid credentials');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new UnauthorizedError('Invalid credentials');
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '1d' }
    );

    return {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };
  }
}

export default new AuthService();
