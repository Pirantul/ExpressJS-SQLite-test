import express from 'express'
import { db } from '../db/useDb'

const router = express.Router({})

// interface Car {
//   model: string,
//   number: string,
// }

export default router.get('', (req, res) => {

  db.all('SELECT number, model FROM cars', (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.json(result)
    }
  })
})