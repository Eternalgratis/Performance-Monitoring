import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login () {
    const[name, setName] = useState("")
    const[password, setPassword] = useState("")
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            axios.post('http://localhost:3001/login', {name, password})
            .then(result => {console.log(result)
                navigate('/homepage')
                if(result.data = 'Exist') {
                    navigate('/homepage', { state: { id:name } })
                }
                else if(result.data = 'Not exist') {
                    alert('User is not signed up')
                }
            })
            .catch (error => {
                alert('Wrong details')
                console.log(error)
            })
        } catch (error) {
            
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary wh-100">
            <div className="bg-white p-3 rounded wh-25">
            <h1>Login</h1>
        <form onSubmit={handleSubmit}>
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
                onChange={(e) => setName(e.target.value)}
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

export default Login;