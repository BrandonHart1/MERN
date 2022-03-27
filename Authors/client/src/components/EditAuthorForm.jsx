import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import {
    Link // anchor tag without refreshing the page
} from "react-router-dom";

const EditAuthorForm = (props) => {

    let [authorInfo, setAuthorInfo] = useState({
        name: ""
    });

    const {_id} = useParams();

    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .then(res => {
                console.log("Response: ", res);
                setAuthorInfo(res.data.results)
                
            })
            .catch(err => {
                console.log("Error: ", err)
            })
    }, [])

    const changeHandler = (e) => {
        setAuthorInfo({
            ...authorInfo,
            [e.target.name]: e.target.value
        })
    }

    const updateAuthor =(e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/author/${_id}`)
            .then(res => {
                console.log("Response: ", res)
                history.push("/")
            })
            .catch(err => {
                console.log("Error: ", err)
            })
    }

    const deleteAuthor =(e) => {
        axios.delete(`http://localhost:8000/api/authors/${_id}`)
            .then(res => {
                console.log("Deleted: ", res)
                history.push("/")
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
                    <label htmlFor="">{_id}</label>
                    {/* <input type="text" name="name" className="form-control" onChange={changeHandler} value={authorInfo.name}/> */}
                </div>
                    <input type="submit" value="Cancel" />
                    <input type="submit" value="Submit"/>
            </form>
        </div>
    )


}





export default EditAuthorForm;