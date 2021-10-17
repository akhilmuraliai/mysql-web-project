const express = require('express')
const app = express()
const mySQL = require('mysql')
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + "/public"))

const connection = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tina',
    database: 'join_us',
})

const port = 8080

app.get('/', (request, response) => {
    var q = 'SELECT COUNT(*) AS count FROM users;'
    connection.query(q, (error, results) => {
        if (error) throw error
        let total_users = results[0].count
        response.render('home', { count: total_users })
    })
})

app.post('/register', (request, response) => {
    const person = { email: request.body.email }

    connection.query('INSERT INTO users SET ?', person, function (error, result) {
        if (error) throw error
        console.log(result)
    })

    response.redirect("/")
})

app.listen(port, () => {
    console.log(`Running...on http://localhost:${port}`)
})
