const express = require('express')

const router = express.Router()

// connect to db
const mysql = require( '../database' )


// get all users 
router.get('/', (req, res) => {

    var sql = 'SELECT * FROM users'

    mysql.query( sql , ( err, rows ) => {
      if(!err) {
        res.json(rows) // send result 
      }else {
        var dataError = { message: err }
        res.status(400).json(dataError)
      }
    })
})

// get a user 
router.get("/:id", (req, res) => {
    const { id } = req.params

    var sql = `SELECT * FROM users WHERE id = "${id}"`

    mysql.query(sql, (err, rows, fields) => {
        if(!err){
            res.json(rows[0])
        }else{
            console.log(err)
            var dataError = { message: err }
            res.status(400).json(dataError)
        }
    })
})

// post
router.post('/', ( req, res ) => {
    const { name, pass } = req.body

    var sql = `INSERT INTO users (name, pass) VALUES ( "${name}", "${pass}" )`

    mysql.query(sql, err => {
        if(!err){
            const dataPost = { message: "user saved"}
            res.status(200).json(dataPost)
        }else{
            console.log(err)
            const dataError = { message: err }
            res.status(400).json(dataError)
        }
    })
})

// delete 
router.delete("/:id", (req, res) => {
    const { id } = req.params

    var sql = `DELETE FROM users where id = "${id}"`

    mysql.query(sql, err => {
        if(!err){
            const dataDelete = { message: "Delete this" }
            res.status(200).json(dataDelete)
        }else{
            console.error(err)
            const dataError = { message: err }
            res.status(400).json(dataError)
        }
    })
})

module.exports = router
