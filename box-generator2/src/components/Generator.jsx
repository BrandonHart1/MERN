import React from 'react';
import { useState } from 'react'

// ---------- Arrow Function ----------
const Generator = () => {
    let [newColor, setColor] = useState("")

    // ----- Empty array for the boxes -----
    const [state, setState] = useState({
        boxes: [],
        newColor: "",
        newHeight: 0,
        newWidth: 0
    })


    const submitHandler = (e) => {
        e.preventDefault();
    }


    return(
        // ----- Returning JSX -----
        <form>
            {/* <h1>Help</h1> */}
            <div>
                <label>Color</label>
                <input type="text" name="newColor" onChange={ (e) => setColor(e.target.value) }/>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            <div style = {{width: '100px', height: '100px',  backgroundColor: newColor}}>
                {/* <h1>Testing</h1> */}
            </div>
        </form>
    )
}


export default Generator; 