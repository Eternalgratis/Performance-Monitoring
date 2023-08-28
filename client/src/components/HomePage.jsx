import React, { useState } from "react";

function HomePage () {
    const [user, setUser] = useState("Titi")
    return (
        <h1 onChange={(e) => setUser(e.target.value)}>Welcome</h1>
    )
}

export default HomePage