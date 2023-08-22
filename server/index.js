const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const AdminModel = require('./models/admin')
const AccountofficerModel = require('./models/accountOfficer')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/PerformanceMonitoring')

app.post('/admin-login', (req, res) => {
    const {staffno, password} = req.body
    AdminModel.findOne({staffno:staffno})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json('Successful')
            } else {
                res.json('Already taken')
            }
        } else {
            res.json('No record')
        }
    })
})

app.post('/login', (req, res) => {
    const {email, password} = req.body
    AccountofficerModel.findOne({email:email})
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
    const {staffno, name, email, password} = req.body
   // Check if the user is an admin based on the staffno
   if (staffno !== 'LIRS/1600') {
    return res.status(403).json({ error: 'User is not an admin.' });
}
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