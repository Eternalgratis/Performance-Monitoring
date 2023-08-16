const mongoose = require('mongoose')

const accountofficerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const AccountofficerModel = mongoose.model("accountofficer", accountofficerSchema)
module.exports = AccountofficerModel