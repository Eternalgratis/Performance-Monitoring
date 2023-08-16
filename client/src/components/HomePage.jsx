import React from "react";
import { useState } from "react";
import'bootstrap/dist/css/bootstrap.min.css'


function Homepage () {
    const [user, setUser] = useState("User")

    return (
        <div>
            <h1>Welcome! {user}</h1>
            <a href="/admin" className="btn btn-primary active m-2" role="button">Signup as Admin</a>
            <a href="/accountofficer" className="btn btn-info active m-2" role="button">Signup as Account Officer</a>
        </div>
    )
}

export default Homepage