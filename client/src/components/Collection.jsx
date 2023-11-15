import React from "react";
import { useState } from "react";

function RevenueCollection () {
    const handleChange = (e) => {
        const selected_file = e.target.file[0]
    }

    return (
        <input type="file" onChange={handleChange} />
    )
}

export default RevenueCollection;