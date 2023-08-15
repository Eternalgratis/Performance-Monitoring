import React from "react";
import { Link } from "react-router-dom";

function AccountOfficer () {
    retun (
        <div>
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
            <button type="submit" className="btn btn-sucess w-100 rounded-0">Register</button>
          </form>
           <p>Alraedy have an acctount?</p>
           <Link to='/login' className="btn btn-defauly border w-100 bg-light rounded-0 ">Login</Link>
         </div>
         </div>
        </div>
    )
}

export default AccountOfficer;