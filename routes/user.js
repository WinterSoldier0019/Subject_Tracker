const router = require("express").Router()
const { DB,student,subject } = require("../models/db")

router.get("/" ,(req,res) => {
    console.log(student.findAll().then((result) => {
        console.log(result)
    }))
    res.send("Hello")
})

router.post("/" ,(req,res) => {
    try {
        res.status(201).send(student.create({
           Roll: req.body.roll,
           Name: req.body.name 
        }))
    }
    catch(err) {
        res.status(400).send({
            Error: err
        })
    }
})

module.exports = {
    router
}