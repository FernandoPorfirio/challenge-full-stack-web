import * as yup from 'yup';
import UserRepository from '../repositories/UserRepository';
import { BadRequestError, ConflictError } from '../helper/ApiError';

class UserService {
  async getAllUsers() {
    return UserRepository.getUser();
  }

  async createUser(userData: any) {
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
    });

    try {
      await bodyValidation.validate(userData);
    } catch (error) {
      const yupError = error as yup.ValidationError;
      throw new BadRequestError(yupError.message);
    }

    const { email } = userData;
    const existEmail = await UserRepository.findUserByEmail(email);

    if (existEmail) {
      throw new ConflictError('Email address already exists');
    }

    await UserRepository.createUser(userData);

    const { id, name } = userData;
    return { id, name, email };
  }

  async findUserWithTransaction(id: number) {
    return UserRepository.findUserWithTransaction(id);
  }
}

export default new UserService();
