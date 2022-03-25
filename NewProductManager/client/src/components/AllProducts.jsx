import React, { useState, useEffect } from 'react';  // useState store the array of results
import axios from 'axios';

import {
    BrowserRouter,
    Switch,
    Route,
    Link // anchor tag without refreshing the page
} from "react-router-dom";


const AllProducts = (props) => {


    // useState to store all the products
    const [productList, setProductList] = useState([])

    useEffect(() => { // stops it from repeating calls
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log("Response: ", res.data.results) // gives the array of products
                setProductList(res.data.results) // use the setter (setProductList) to show the products
            })
            .catch(err => {
                console.log("Error: ", err)
            })
    }, [props.formSubmitted]) // dependency array
    // props.formSubmitted variable that can change inside this array
        


    return (
        <div>
            <h2>All Products</h2>
            {
                productList.map((productObj) => {
                    return (
                        <div className="card" key = {productObj._id}> {/* "key" gives each child a unique property */}
                            <div className="card-body">
                                <h4 className="card-title"><Link to={`/description/${productObj._id}`}>{productObj.title}</Link></h4>
                                <h5 className="card-text">
                                    Price: {productObj.price}
                                </h5>
                                <h6>
                                    Description: {productObj.description}
                                </h6>
                                <Link to={`/edit/${productObj._id}`} className= 'btn btn-secondary'>Edit {productObj.title}</Link>
                                {/* <a href="#!" className="btn btn-primary">Create</a> */}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllProducts;

