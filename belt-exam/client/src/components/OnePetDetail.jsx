import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import axios from 'axios'
import { useHistory } from "react-router-dom"


const OnePetDetail = () => {

    const {_id} = useParams();

    const[info, setInfo] = useState({})

    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${_id}`)
            .then(res => {
                console.log("Response: ", res.data.results)
                setInfo(res.data.results)
            })
            .catch(err => {
                console.log("Error: ", err)
            })
    }, [])

    const deletePet = () => {
        axios.delete(`http://localhost:8000/api/pets/${_id}`)
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
            <button onClick = {deletePet} className="btn btn-danger" >Adopt {info.petName}</button>
            <h3>Details about: </h3>
            <h4>{info.petName}</h4>
            <h4>{info.type}</h4>
            <h4>{info.description}</h4>
            <h4>{info.skills}</h4>
        </div>
    )
}


export default OnePetDetail;