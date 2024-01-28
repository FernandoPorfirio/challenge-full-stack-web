import 'express-async-error'
import { app } from './app'
import dotenv from 'dotenv'
import { AppDataSource } from './database/data-source'

import errorHandlerMiddleware from './app/middlewares/errorHandlerMiddleware'

dotenv.config()

const port = process.env.PORT || 3000

AppDataSource.initialize().then(async () => {
  console.log('database is running')
  app.use(errorHandlerMiddleware)
  app.listen(port, () => {
    console.log(`server is running in  http://localhost:${port}`)
  })
})
