import express, { Express } from 'express'

const app: Express = express()

app.use(express.json())

app.get('/', async (req, res) => {
  res.send('hi, iam alive!')
})

export default app
