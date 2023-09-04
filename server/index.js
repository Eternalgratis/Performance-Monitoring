const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const AdminModel = require('./models/admin')
const AccountofficerModel = require('./models/accountOfficer')
const {hashPassword, comparedPassword }= require('../server/helpers/auth')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/PerformanceMonitoring')

app.post('/admin', async (req, res) => {
    const {staffno, name, email, password} = req.body
   // Check if the user is an admin based on the staffno
   if (staffno !== 'LIRS/1600') {
    return res.status(403).json({ error: 'User is not an admin.' });
}
    // Hash the password before storing it
   const hashedPassword = await hashPassword(password); // Call the hashedPassword function
   const admin = await AdminModel.create({
    staffno: staffno,
    name: name,
    email: email,
    password: hashedPassword
   })
    .then(admin => res.json(admin))
    .catch(err => res.json(err))
})

app.post('/admin-login', async (req, res) => {
  try {
    const {staffno, password} = req.body
    const user = await AdminModel.findOne({staffno:staffno})  
    if(!user) {
        return res.status(401).json({error:'User not found'})
    }
    const match = await comparedPassword(password, user.password)
    if(match) {
     return res.json({message:'Password match'})
    }
    return res.status(401).json({error:'Pasword incorrect'}) 
  } catch (error) {
    console.log(error)
    res.status(500).json({message:'Internal server error'})
  }
})

app.post('/accountofficer', async (req, res) => {
    const { name, email, password } = req.body
    const hashedPassword = await hashPassword(password)
    const accountofficer =  await AccountofficerModel.create({
    name: name,
    email: email,
    password: hashedPassword
  })
    .then(accountofficer => res.json(accountofficer))
    .catch(err => res.json(err))
})

app.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await AccountofficerModel.findOne({email:email})
        if(!user) {
            return res.json('User not found')
        }
        const match = await comparedPassword(password, user.password)
        if(match) {
            res.json('Password match')
          }         
    } catch (error) {
        console.log(error)
    }
})


app.get('/', (req, res) => {

})

app.listen(3001, () => {
    console.log('server is running')
})