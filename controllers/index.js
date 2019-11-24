const mysql = require('mysql')
const pool = require('../sql/connection')

const getAllUsers = (req, res) => {
  // SELECT ALL USERS
//   pool.query("SELECT * FROM users", (err, rows) => {
//     if (err) return handleSQLError(res, err)
//     return res.json(rows);
//   })
    return [1, 2, 3, 4, 5]
    // delete the above line and uncomment
    // the query above to interact with a sql database
}

module.exports = {
    getAllUsers
}