import React from "react";
import { useState } from "react";
import { utils, read } from "xlsx"

function RevenueCollection () {
    const file_type = []
    const handleChange = (e) => {
        const selected_file = e.target.file[0]
    }
    return (
        <input type="file" onChange={handleChange} />
    )
}

export default RevenueCollection;