// Reuse the ProductForm

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom"
    

const EditProductForm = (props) => {  // "props" will pass down information to a component

    let [productInfo, setProductInfo] = useState({
        title: "",
        price: "",
        description: ""
    });

    const {_id} = useParams();

    const history = useHistory();

    useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${_id}`)
        .then(res => {
            console.log("Response: ", res);
            setProductInfo(res.data.results)
        })
        .catch(err => {
            console.log("Error: ", err)
        })

    }, [])

    const changeHandler = (e) => {
        // e.target.name = name of the input name
        // e.target.value = input information
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }
    
    const updateProduct = (e) => {
        e.preventDefault(); // ----- prevents the page from reloading -----

        axios.put(`http://localhost:8000/api/products/${_id}`, productInfo)
            .then(res => {
                console.log("Response: ", res)
                history.push("/")
            })
            .catch(err => {
                console.log("Error: ", err)
            })

    }
    return (
        <div>
            <p>Edit: {_id}</p>
            <form onSubmit={updateProduct}>
                <div className="form-group">
                    <label htmlFor="">Title: </label>
                    <input type="text" name="title" id="" className="form-control" onChange={changeHandler} value={productInfo.title} />            
                </div>
                <div className="form-group">
                    <label htmlFor="">Price: </label>
                    <input type="number" name="price" id="" className="form-control" onChange={changeHandler} value={productInfo.price}/>                   
                </div>
                <div className="form-group">
                    <label htmlFor="">Description: </label>
                    <input type="text" name="description" id="" className="form-control" onChange={changeHandler} value={productInfo.description}/>
                </div>
                <input type="submit" value="Edit Product" />      
            </form>
        </div>
    );
};

export default EditProductForm;