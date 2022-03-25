import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import axios from 'axios'
import { useHistory } from "react-router-dom"

// Adding another git commit

const OneProductDetail = () => {


    const {_id} = useParams();
    
    const[info, setInfo] = useState({})

    const history = useHistory();


    useEffect(() => { // stops it from repeating calls
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => {
                console.log("Response: ", res.data.results) // gives the array of products
                setInfo(res.data.results) // use the setter (setProductList) to show the products
            })
            .catch(err => {
                console.log("Error: ", err)
            })
    }, []) // dependency array


    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${_id}`)
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
            <h3>{info.title}</h3>
            <h5>{info.price}</h5>
            <h5>{info.description}</h5>
            <button onClick = {deleteProduct} className="btn btn-danger">Delete {info.title}</button>
        </div>
    )
}

export default OneProductDetail;