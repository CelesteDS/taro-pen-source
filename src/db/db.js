const pgp = require('pg-promise')()

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/tarot_test'
/*  process.env.NODE_ENV === 'test'
    ? process.env.TEST_DB_URL
    : process.env.DB_URL */

// const connectionString = 'postgres:///roam'
const db = pgp(connectionString)

module.exports = db
