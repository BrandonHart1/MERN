import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import {
    Link // anchor tag without refreshing the page
} from "react-router-dom";


const EditAuthorForm = () => {

    let [name, setName] = useState("")
    
    const {_id} = useParams();
    
    let [formErrors, setFormErrors] = useState({})

    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${_id}`)
        .then(res => {
            console.log("Response: ", res);
            setName(res.data.results.name)
            
        })
        .catch(err => {
            console.log("Error: ", err)
        })
    }, [])
    console.log(_id)    

    const updateAuthor =(e) => {
        e.preventDefault();

        let authorInfo = {name}

        axios.put(`http://localhost:8000/api/authors/edit/${_id}`, authorInfo)
            .then(res => {
                console.log("Response: ", res)
                if(res.data.error) {
                    setFormErrors(res.data.error.errors);
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
            <Link to={"/"}>Home</Link>
            <form onSubmit={updateAuthor}>
                <div className="form-group">
                    <h5>Edit This Author:</h5>
                </div>
                <div className="container">
                <p className='text-danger'>{formErrors.name?.message}</p>
                    <label htmlFor="" ></label>
                    <input type="text" name="name" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                    <Link to={"/"}>Cancel</Link>
                    <input type="submit" value="Submit"/>
            </form>
        </div>
    )


}





export default EditAuthorForm;