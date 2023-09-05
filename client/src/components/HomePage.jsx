import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function HomePage () {
    const location = useLocation();
    const userName = location?.state?.name;
    return (
        <h1>Welcome {userName ? userName : ''}</h1>
    )
}

export default HomePage