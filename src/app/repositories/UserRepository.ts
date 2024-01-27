import User from '../entities/User'
import IUser from '../interfaces/IUser'
import { AppDataSource } from '../../database/data-source'

const userRepository = AppDataSource.getRepository(User)

const getUser = async (): Promise<IUser[]> => {
  const user = await userRepository.find()
  return user
}

export default { getUser }
