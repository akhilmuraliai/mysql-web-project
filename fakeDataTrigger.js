const myFaker = require('faker')
const mySQL = require('mysql')

const connection = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tina',
    database: 'join_us',
})

// // SELECTING DATA
// const q = 'SELECT COUNT(*) AS total_users FROM users'
// connection.query(q, function (error, results, fields) {
//     if (error) throw error

//     console.log(results[0].total_users)
// })

// // INSERTING DATA
// const person = {email: myFaker.internet.email(), created_at: myFaker.date.post()}

// connection.query('INSERT INTO users SET ?', person, function(error, result) {
//     if (error) throw error
//     console.log(result)
// })

// connection.query('SELECT * FROM users', function(error, result) {
//     if (error) throw error
//     console.log(result)
// })

// INSERTING 500

const data = []

for (let index = 0; index < 600; index++) {
    data.push([myFaker.internet.email(), myFaker.date.past()])
}

const q = 'INSERT INTO users (email, created_at) VALUES ?'

connection.query(q, [data], function (error, results) {
    console.log(error)
    console.log(results)
})

const q1 = 'SELECT COUNT(*) AS total_users FROM users'
connection.query(q1, function (error, results, fields) {
    if (error) throw error

    console.log('Total Count: ', results[0].total_users)
})

connection.end()
