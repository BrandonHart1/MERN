import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom"
    

const EditPetForm = () => {

    let[petInfo, setPetInfo] = useState({
        petName: "",
        type: "",
        description: "",
        skills: ""
    })

    const{_id} = useParams();

    const history =  useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${_id}`)
        .then(res => {
            console.log("Response: ", res);
            setPetInfo(res.data.results)
        })
        .catch(err => {
            console.log("Error: ", err)
        })
    }, [])

    const changeHandler = (e) => {
        setPetInfo({
            ...petInfo,
            [e.target.name]: e.target.value
        })
    }

    const updatePet = (e) => {
        e.preventDefault(); // ----- prevents the page from reloading -----

        axios.put(`http://localhost:8000/api/pets/edit/${_id}`, petInfo)
            .then(res => {
                console.log("Response: ", res)
                history.push("/")
            })
            .catch(err => {
                console.log("Error: ", err)
            })

    }

    return (
        <>
            <div>
                <form onSubmit={updatePet}>
                    <div>
                        <label htmlFor="">Pet Name</label>
                        <input type="text" name="petName" id="" className="form-control" onChange={changeHandler} value={petInfo.petName} /> 
                    </div>
                    <div>
                        <label htmlFor="">Type</label>
                        <input type="text" name="type" id="" className="form-control" onChange={changeHandler} value={petInfo.type} /> 
                    </div>
                    <div>
                        <label htmlFor="">Description</label>
                        <input type="text" name="description" id="" className="form-control" onChange={changeHandler} value={petInfo.description} /> 
                    </div>
                    <div>
                        <label htmlFor="">Skills</label>
                        <input type="text" name="skills" id="" className="form-control" onChange={changeHandler} value={petInfo.skills} /> 
                    </div>
                    <input type="submit" className="Edit Pet" />
                </form>
            </div>
        </>
    )

}

export default EditPetForm;