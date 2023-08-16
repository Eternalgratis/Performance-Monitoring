import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

function AccountOfficer () {
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/accountofficer', {name, email, password})
        .then(result => console.log(result))
        .then(err => console.log(err))
    }

    return (
        <div>
            <div className="d-flex justify-content-center align-item-center bg-secondary wh-100">
            <div className="bg-white p-3 rounded wh-25">
            <h1>Register</h1>
          <form onSubmit={handleSubmit}>
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
                required
                onChange={(e) => setName(e.target.value)}
                 />
            </div>
            <div className="mb-3">
                <label htmlFor="name">
                    <strong>Email</strong>
                </label>
                <input 
                type="text"
                placeholder="Enter your email"
                autoComplete="off"
                name="email"
                className="form-control rounded-0"
                required
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
                required
                onChange={(e) => setPassword(e.target.value)}
                 />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>
          </form>
           <p>Already have an acctount?</p>
           <Link to='/login' className="btn btn-defauly border w-100 bg-light rounded-0 ">Login</Link>
         </div>
         </div>
        </div>
    )
}

export default AccountOfficer;