
import { useState } from 'react'

// ---------- Arrow Function ----------
const Generator = () => {
    let [newColor, setColor] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
    }
    
    return(
        // ----- Returning JSX -----
        // <form>
        //     <h1>Help</h1>
        //     <div>
        //         <label>Color</label>
        //         {/* <input type="text" name="newColor" onChange={ (e) => setColor(e.target.value) }/> */}
        //         <input type="text" name="" id="" />
        //     </div>
        //     <div style = {{ height: '40px', backgroundColor: "blue"}}>
        //         <h1>Testing</h1>{/* boxes */}
        //     </div>
        // </form>
        <h3>Testing</h3>
    )
}


export default Generator; 