import React from "react";
import'bootstrap/dist/css/bootstrap.min.css'


function AdminSignup () {
    return (
        <>
        <div className="d-flex justify-content-center align-item-center bg-secondary wh-100">
            <div className="bg-white p-3 rounded wh-25">
            <h1>Register</h1>
        <form>
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
                 />
            </div>
        </form>
            </div>
        </div>
        </>
    )
}

export default AdminSignup;