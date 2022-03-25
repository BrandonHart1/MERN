import axios from 'axios';
import React, { useState } from 'react';


const ProductForm = (props) => {  // "props" will pass down information to a component

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [formErrors, setFormErrors] = useState({})

    const createProduct = (e) => {
        e.preventDefault(); // ----- prevents the page from reloading -----
        let formInfo = {title, price, description}  // ----- object to store the form info -----    

        axios.post("http://localhost:8000/api/products", formInfo) // ---- "formInfo" sends formInfo in the post request ----
            .then(res => {
                console.log("Results: ", res)
                if(res.data.error){  // if form is filled out properly
                    setFormErrors(res.data.error.errors)
                }else{
                    props.setFormSubmitted(!props.formSubmitted)  // from false to true, or true to false in App.js
    
                    setTitle("");  // clear the form info
                    setPrice("");  //
                    setDescription("");  //
                }
            })
            .catch(err => {
                console.log("Error: ", err)
            })
    }

    return (
        <div>
            <form onSubmit={createProduct}>
                <div className="form-group">
                    <label htmlFor="">Title: </label>
                    <input type="text" name="" id="" className="form-control" onChange={(e) => {setTitle(e.target.value)}} />
                    <p className="text-danger">{formErrors.title?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price: </label>
                    <input type="number" name="" id="" className="form-control" onChange={(e) => {setPrice(e.target.value)}}/>
                    <p className="text-danger">{formErrors.price?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description: </label>
                    <input type="text" name="" id="" className="form-control" onChange={(e) => {setDescription(e.target.value)}} />
                    <p className="text-danger">{formErrors.description?.message}</p>
                </div>
                <input type="submit" value="Create Product" />      
            </form>
        </div>
    );
};

export default ProductForm;