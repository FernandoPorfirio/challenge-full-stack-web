import 'reflect-metadata'
import dotenv from 'dotenv'
import { DataSource } from 'typeorm'

import { entities } from './entities'

import { migrations } from './migrations'

dotenv.config()

export const AppDataSource = new DataSource({
  type: process.env.TYPEORM_CONNECTION as any,
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT || '3000', 10),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: true,
  logging: false,
  entities,
  migrations,
  subscribers: []
})
