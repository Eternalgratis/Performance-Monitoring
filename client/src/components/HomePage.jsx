import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function HomePage () {
    const location = useLocation();
    return (
        <h1>Welcome {location.state.id}</h1>
    )
}

export default HomePage