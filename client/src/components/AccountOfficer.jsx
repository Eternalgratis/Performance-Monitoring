import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

function AccountOfficer () {
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            axios.post('http://localhost:3001/accountofficer', {name, email, password})
            .then(result => {
                console.log(result)
                if(result.data = 'Exist') {
                    navigate('/homepage', {state: {id:email}})
                }
                else if(result.data = 'Not exist') {
                    navigate('/admin', {state: {id:email}})
                }
            })
            .catch(error => {
                alert('Wrong details')
                console.log(error)
            })
       
        } catch (error) {
            
        }
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