import 'express-async-errors'
import { DataSourceOptions } from 'typeorm'
import app from './app'

import dotenv from 'dotenv'
import DatabaseManager from '../src/database/databaseManager'

import errorHandler from './shared/middleware/error-handler.middleware'

dotenv.config()

const port = process.env.PORT || 3000

const datasourceOptions: DataSourceOptions = {
  type: process.env.TYPEORM_CONNECTION as any,
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT || '3000', 10),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: true,
  logging: false
}

const dbManager: DatabaseManager = new DatabaseManager(datasourceOptions)
dbManager.initializeDataSource()

app.use(errorHandler.handle.bind(errorHandler))
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
