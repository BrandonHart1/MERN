import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import {useHistory } from "react-router-dom"



import {
    Link // anchor tag without refreshing the page
} from "react-router-dom";


const AllAuthors = () => {

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

    const deleteAuthor = (idOfAuthor) => {
        axios.delete(`http://localhost:8000/api/authors/${idOfAuthor}`)
            .then(res => {
                console.log("Results: ", res)
                // history.push("/");
                let filteredList = authorList.filter((authorObj) => {
                    return authorObj._id != idOfAuthor // return the author that is not the id of the author deleted
                })
                setAuthorList(filteredList)
            })
            .catch(err => {
                console.log("Error: " , err)
            })
    }



    return (
        <div>
            <h2>All Authors</h2>
            <h5>We Have Quotes By:</h5>
            <Link to={"/authors/new"}>Add an Author</Link>
                            <table className="table" >
                                <thead className="thead-light">
                                    <tr>
                                    <th></th>
                                        <th>Author</th>
                                        <th>Actions Available</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        authorList.map((authorObj) => {
                                            return (
                                    <tr key = {authorObj._id}>
                                    <th scope="row"></th>
                                        <td>{authorObj.name}</td>
                                        <td>
                                        <Link to={`/authors/edit/${authorObj._id}`} className='btn btn-secondary'>Edit</Link>
                                        <button onClick = {()=>deleteAuthor(authorObj._id)} className='btn btn-danger'>Delete</button>                                 
                                        </td>
                                    </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        
    
        </div>
    );
};

export default AllAuthors;