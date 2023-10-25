import React from "react";
import { useState } from "react";

function RevenueCollection () {
    const [data, setData] = useState([])

    const addRow = () => {
        setData([...data, Array(data[0].length).fill('')])
    }

    const handleChange = (e) => {
        const selected_file = e.target.file[0]
    }
    return (
        <>
          <input type="file" onChange={handleChange} />
          <button>Upload</button>
        </>
    )
}

export default RevenueCollection;