import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import {useHistory } from "react-router-dom"



import {
    Link
} from "react-router-dom";

const AllPets = (props) => {

    const [petList, setPetList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                console.log("Response: ", res.data.results);
                setPetList(res.data.results)
            })
            .catch(err => {
                console.log("Error: ", err)
            })
    }, [props.formSubmitted])
        

    return (
        <div>
            <Link to={"/pets/new"}>Create a New Pet</Link>
            <h3>These Pets Are Looking For A Good Home</h3>
            <table className="table" >
            <thead className="thead-light">
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Skills</th>
                </tr>
            </thead>
            <tbody>

            
            {
                petList.map((petObj) => {
                    return (
    
                            // <div className="card"   style = {{border: "1px solid black"}}>
                                <tr key = {petObj._id}>
                                    <td>{petObj.petName}</td>
                                    <td>{petObj.type}</td>
                                    <td>{petObj.description}</td>
                                    <td>{petObj.skills}</td>
                                    <td>

                                    <Link to={`/pets/${petObj._id}`} className='btn btn-secondary'>Details</Link>
                                    <Link to={`/pets/edit/${petObj._id}`} className='btn btn-secondary'>Edit</Link>
                                    </td>
                                </tr>
                                
                            // </div>
                    
                    )
                })
            }
            </tbody>
            </table>
        </div>
    )

}

export default AllPets;