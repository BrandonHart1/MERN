import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import {useHistory } from "react-router-dom"



import {
    BrowserRouter,
    Switch,
    Route,
    Link // anchor tag without refreshing the page
} from "react-router-dom";


const AllAuthors = (props) => {

    const [authorList, setAuthorList] = useState([])

    const { _id } = useParams();

    const [info, setInfo] = useState([])

    const history = useHistory(); 

    useEffect(() => {
    axios.get("http://localhost:8000/api/authors")
        .then(res => {
            console.log("Results", res.data.results);
            setAuthorList(res.data.results);
        })
        .catch(err => {
            console.log("Error", err)
        })

    }, [])

    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/api/authors/${_id}`)
            .then(res => {
                console.log("Results: ", res)
                history.push("/");
            })
            .catch(err => {
                console.log("Error: ", err)
            })
    }


    return (
        <div>
            <h2>All Authors</h2>
            <h5>We Have Quotes By:</h5>
            <Link to={"/authors/new"}>Add an Author</Link>
            {
                authorList.map((authorObj) => {
                    return (
                        <form>
                            <table className="table" key = {authorObj._id}>
                                <thead className="thead-light">
                                    <tr>
                                        <th>Author</th>
                                        <th>Actions Available</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{authorObj.name}</td>
                                        <td>
                                        <Link to={`/edit/${authorObj._id.name}`} className='btn btn-secondary'>Edit</Link>
                                        <button onClick = {deleteAuthor} className='btn btn-danger'>Delete {info.name}</button>                                 
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form> 
                        
                    )
                })
            }
        </div>
    );
};

export default AllAuthors;