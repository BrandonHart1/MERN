import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom"

import {
    BrowserRouter,
    Switch,
    Route,
    Link // anchor tag without refreshing the page
} from "react-router-dom";

const AuthorForm = () => {

    const [name, setName] = useState("");

    const [formErrors, setFormErrors] = useState({});

    const history = useHistory();

    const createAuthor = (e) => {
        e.preventDefault();
        let formInfo = {name}

        axios.post("http://localhost:8000/api/authors/new", formInfo) // send the form info in the post request
            .then(res => {
                console.log("Results: ", res);
                if(res.data.error) {
                    setFormErrors(res.data.error.errors)
                }else{
                    history.push("/")
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
                <input type="submit" className="Submit" />
            </form>
        </div>
    )
}




export default AuthorForm;