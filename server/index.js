const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const AdminModel = require('./models/admin')
const AccountofficerModel = require('./models/accountOfficer')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/PerformanceMonitoring')

app.post('/login', (req, res) => {
    const {email, password} = req.body
    AdminModel.findOne({email:email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json('Successful')
            } else {
                res.json('Already taken')
            }
        }  else {
            res.json('No record')
        }
    })
})

app.post('/admin', (req, res) => {
    AdminModel.create(req.body)
    .then(admin => res.json(admin))
    .catch(err => res.json(err))
})

app.post('/accountofficer', (req, res) => {
    AccountofficerModel.create(req.body)
    .then(accountofficer => res.json(accountofficer))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log('server is running')
})