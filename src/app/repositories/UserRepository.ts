import User from '../entities/User'
import IUser from '../interfaces/IUser'
import { AppDataSource } from '../../database/data-source'

const userRepository = AppDataSource.getRepository(User)

const getUser = async (): Promise<IUser[]> => {
  const user = await userRepository.find()
  return user
}

const createUser = async (userData: IUser): Promise<IUser> => {
  const newUser = userRepository.create(userData)
  const savedUser = await userRepository.save(newUser)
  return savedUser
}

const isEmailInUse  = async (email: string): Promise<boolean> => {
  const existingUser = await userRepository.findOne({ where: { email } })
  return !!existingUser
}

const findUserByEmail  = async (email: string): Promise<IUser | null> => {
  const user = await userRepository.findOne({ where: { email } })
  return user
}

export default { getUser, createUser, isEmailInUse, findUserByEmail  }
