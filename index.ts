import express from 'express'
import fs from 'fs/promises'

import users  from './router/users'
import cars  from './router/cars'

const app = express()

app.get("/", async (req, res)=> {
  const indexFile = await fs.readFile('./static/index.html')
  res.end(indexFile)
})

app.use('/users', users)
app.use('/cars', cars)

app.listen(3003, () => {
  console.log('Server RUNNING')
})