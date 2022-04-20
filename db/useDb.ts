import sqlite3 from 'sqlite3'

  export const db = new sqlite3.Database('./db.db', (err) => {
    if (err) {
      console.log('Could not connect to database', err)
    } else {
      console.log('Connected to database')
    }
  })