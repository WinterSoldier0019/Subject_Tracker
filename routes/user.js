const router = require("express").Router()
const { DB,student,subject } = require("../models/db")

router.get("/" , (req,res) => {
    student.findAll().then((result) => {
        res.status(201).send(result)
        console.log(result)
    }).catch((err) => {
        res.status(400).send(err)
        console.log(err)
    })
})

router.get("/sub" ,(req,res) => {
    subject.findAll().then((result) => {
        res.status(201).send(result)
        console.log(result)
    }).catch((err) => {
        res.status(400).send(err)
        console.log(err)
    })
})

router.post("/sub" ,(req,res) => {
    try {
        subject.create({
            English: req.body.eng,
            Hindi: req.body.hin,
            Maths: req.body.mat
        }).then((result) => {
            res.status(201).send(result)
            console.log(result)
        })
    }
    catch(err) {
        res.status(400).send(err)
        console.log(err)
    }
})

router.post("/", (req,res) => {
    try {
        student.create({
            Roll: req.body.roll,
            Name: req.body.name
        }).then((result) => {
            res.status(201).send(result)
            console.log(result)
        })
    }
    catch(err) {
        res.status(400).send(err)
        console.log(err)
    }
})

module.exports = {
    router
}