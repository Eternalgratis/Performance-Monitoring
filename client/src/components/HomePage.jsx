import React, { useState } from "react";

function HomePage () {
    const [user, setUser] = useState("Titi")
    return (
        <h1>Welcome {setUser}</h1>
    )
}

export default HomePage