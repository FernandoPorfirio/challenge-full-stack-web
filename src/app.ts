import express, { Express } from 'express'
import apiRoutes from './modules/routes'

const app: Express = express()

app.use(express.json())

app.use('/api/v1', apiRoutes)

app.get('/', async (_req, res) => {
  res.send('hi, iam alive!')
})

export default app
