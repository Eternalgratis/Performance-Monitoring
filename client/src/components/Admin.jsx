import React, { useState } from "react";
import'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"
import axios from "axios"


function Admin() {
    const [staffno, setStaffNo] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const hanndleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/admin', {staffno, name, email, password})
        .then(result => console.log(result))
        .then(err => console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-item-center bg-secondary wh-100">
            <div className="bg-white p-3 rounded wh-25">
            <h1>Register</h1>
        <form onSubmit={hanndleSubmit}>
            <div className="mb-3">
                <label htmlFor="name">
                    <strong>Staff No</strong>
                </label>
                <input 
                type="text"
                placeholder="Enter your staff no"
                autoComplete="off"
                name="name"
                className="form-control rounded-0"
                onChange={(e) => setStaffNo(e.target.value)}
                 />
            </div>
            <div className="mb-3">
                <label htmlFor="name">
                    <strong>Name</strong>
                </label>
                <input 
                type="text"
                placeholder="Enter Name"
                autoComplete="off"
                name="name"
                className="form-control rounded-0"
                onChange={(e) => setName(e.target.value)}
                 />
            </div>
            <div className="mb-3">
                <label htmlFor="email">
                    <strong>Email</strong>
                </label>
                <input 
                type="text"
                placeholder="Enter your email"
                autoComplete="off"
                name="name"
                className="form-control rounded-0"
                onChange={(e) => setEmail(e.target.value)}
                 />
            </div>
            <div className="mb-3">
                <label htmlFor="password">
                    <strong>Password</strong>
                </label>
                <input 
                type="text"
                placeholder="Enter your password"
                autoComplete="off"
                name="name"
                className="form-control rounded-0"
                onChange={(e) => setPassword(e.target.value)}  
                 />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>
        </form>
        <p>Already have an acctount?</p>
        <Link to='/login' className="btn btn-default border w-100 bg-light rounded-0 ">Login</Link>
            </div>
        </div>
    )
}

export default Admin;