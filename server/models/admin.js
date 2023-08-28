const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    staffno: String,
    name: String,
    email: String,
    password: String,
})

const AdminModel = mongoose.model("admin", adminSchema)
module.exports = AdminModel