import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import axios from 'axios'

const Form = () => {

    let [people, setPeople] = useState("");
    let [id, setId] = useState("");
    let history = useHistory("")

    useEffect(() => {
        axios.get("https://swapi.dev/api")

        .then((response) => {
            console.log(response)

            setPeople(response)
        })
    })

    const submitHandler = (e) => {
        e.preventDefault();
        history.pushState(`/${topic}/${id}`)
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="row">
                    <label htmlFor="category" className="form-control">Search For:</label>
                    <select onChange={(e)=> setPeople(e.target.value)}>
                        <option value="films">Films</option>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="species">Species</option>
                        <option value="starships">Starships</option>
                        <option value="vehicles">Vehicles</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="id">ID:</label>
                    <input type="number" onChange={(e) => setId(e.target.value)} name="id" className="form-control" />
                </div>
                <div className="form-group">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )





}

export default Form;