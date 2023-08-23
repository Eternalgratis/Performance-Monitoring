import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AdminLogin () {
        const [staffno, setStaffNo] = useState("")
        const [password, setPassword] = useState("")
        const navigate = useNavigate()

        const handleSubmit = (e) => {
            e.preventDefault()
            axios.post('http://localhost:3001/admin-login', {staffno, password})
            .then(result => console.log(result))
               navigate('/homepage')
            .then(err => console.log(err))
        }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary wh-100">
            <div className="bg-white p-3 rounded wh-25">
            <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="staffno">
                    <strong>Staff No</strong>
                </label>
                <input 
                type="text"
                placeholder="Enter your Staff No"
                autoComplete="off"
                name="name"
                className="form-control rounded-0"
                onChange={(e) => setStaffNo(e.target.value)}
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
            <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
        </form>
            </div>
        </div>

    )
}

export default AdminLogin