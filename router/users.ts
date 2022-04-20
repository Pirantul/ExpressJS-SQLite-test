import express from 'express'

const router = express.Router({})


export default router.get('', (req, res) => {
  const users = [
    {
      name: 'Oleg',
      age: '28',
    },
    {
      name: 'Maxim',
      age: '31',
    },
  ]

  res.json(users)
})