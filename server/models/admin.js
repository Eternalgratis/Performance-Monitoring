const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    staffno: string,
    name: string,
    email: string,
    password: string
})

const AdminModel = mongoose.model("admin", adminSchema)
module.exports = AdminModel