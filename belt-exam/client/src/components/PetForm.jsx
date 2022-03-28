import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom"

import {
    BrowserRouter,
    Switch,
    Route,
    Link // anchor tag without refreshing the page
} from "react-router-dom"

const PetForm = () => {

    const [petName, setPetName] = useState("");

    const [type, setType] = useState("");

    const [description, setDescription] = useState("")

    const [skills, setSkills] = useState("")

    const [formErrors, setFormErrors] = useState({})

    const history = useHistory();

    const createPet =(e) => {
        e.preventDefault();
        let formInfo = {petName, type, description, skills};
        axios.post("http://localhost:8000/api/pets/new", formInfo)
            .then(res => {
                console.log("Results: ", res)
                if(res.data.error) {
                    setFormErrors(res.data.error.errors)
                }else{
                    history.push("/")
                }
            })
            .catch(err => {
                console.log("Errors: ", err)
            })
    }

    return (
        <>
            <div>
                <Link to={"/"}>back to home</Link>
                <form onSubmit={createPet}>
                    <div>
                        <label htmlFor="">Pet Name</label>
                        <input type="text" className="form-control" onChange={(e) => {setPetName(e.target.value)}} />
                        <p className="text-danger">{formErrors.petName?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="">Type</label>
                        <input type="text" className="form-control" onChange={(e) => {setType(e.target.value)}} />
                        <p className="text-danger">{formErrors.type?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="">Description</label>
                        <input type="text" className="form-control" onChange={(e) => {setDescription(e.target.value)}} />
                        <p className="text-danger">{formErrors.description?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="">Skills</label>
                        <input type="text" className="form-control" onChange={(e) => {setSkills(e.target.value)}} />
                        <p className="text-danger">{formErrors.skills?.message}</p>
                    </div>
                    <input type="submit" className="Edit Pet" />
                </form>
            </div>
        </>
    )
}

export default PetForm;