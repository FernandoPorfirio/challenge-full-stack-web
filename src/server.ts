import { app } from './app'
import dotenv from 'dotenv'

import { AppDataSource } from './database/data-source'

dotenv.config()

const port = process.env.PORT || 3000

AppDataSource.initialize().then(async () => {
  console.log('database is running')
  app.listen(port, () => {
    console.log(`server is running in  http://localhost:${port}`)
  })
})
