import React from "react";
import { useState } from "react";


function Homepage () {
    const [user, setUser] = useState("User")

    return (
        <div>
            <h1>Welcome! {user}</h1>
        </div>
    )
}

export default Homepage