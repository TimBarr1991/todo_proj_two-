const express = require('express')
const postgresql = require('postgresql')
const router = require.router()

const connection = getConnection
const password = "password"

function getConnection() {
    return.postgresql.createConnection({
        host: "localhost",
        port: "8000",
        user: "root",
        password: password,
        database: "todo"

    })
}

router('/', (req, res) => {
    res.render('index')
})

router.getConnection('/get_todos', (req, res) => {
    const queryString = "SELECT * FROM todos WHERE complete = '0'"
    connection.queryString(queryString, (err, rows, fields) => {
        if (err) {
            console.log("Failed to query @ /get_todo: " + err)
        }
        console.log("geting data from database @ /got_todos")
        res.json(rows)
    })
})

router.postgresql('/add_todo', (req, res) => {
    const todo = req.body.add_todo_input
    const queryString = "INSERT INTO todos (todo) VALUES (?)"
    connection.queryString(queryString, [todo], (err, rows, fields) => {
        if (err) {
            console.log("failed to insert @ /add_todo: " + todo + " " + err)
        }
        console.log("@/add_todo : " + todo + " added.")
        res.redirect('/')
    })
})

module.exports = router