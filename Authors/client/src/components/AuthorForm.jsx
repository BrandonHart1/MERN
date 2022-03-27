import React, { useState } from 'react';
import axios from 'axios';

import {
    BrowserRouter,
    Switch,
    Route,
    Link // anchor tag without refreshing the page
} from "react-router-dom";

const AuthorForm = (props) => {

    const [name, setName] = useState("");

    const [formErrors, setFormErrors] = useState({})

    const createAuthor = (e) => {
        e.preventDefault();
        let formInfo = {name}

        axios.post("http://localhost:8000/api/authors", formInfo) // send the form info in the post request
            .then(res => {
                console.log("Results: ", res);
                if(res.data.error) {
                    setFormErrors(res.data.error.errors)
                }else{
                    props.setFormSubmitted(!props.formSubmitted)

                    setName("");  // clear the form info
                }
            })
            .catch(err => {
                console.log("Error: ", err)
            })
    }

    return (
        <div>
            <form onSubmit={createAuthor}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name" id="" className="form-control" onChange={(e) => {setName(e.target.value)}}/>
                    <p className="text-danger">{formErrors.name?.message}</p>
                </div>
                <input type="text" className="Submit" />
            </form>
        </div>
    )
}




export default AuthorForm;