import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllProducts = () => {

    // -------- Store all Prodcuts --------
    const [productList, setProductList] = useState([])

    useEffect(() => {
        // request informations from the routes using axios to communicate
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res);
                setProductList(res);
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    return (
        <div>
            <h2>Products</h2>
            {
                productList.map((productObj) => {
                    return(
                        <div className="card" key={productObj._id}>
                            <div className="card-body">
                                <h4 className="card-title">{productObj.title}</h4>
                                <h5 className="card-text">
                                    Price: {productObj.price}
                                </h5>
                                <p>
                                    Description: {productObj.description}
                                </p>
                            </div>
                            <Link to={`/edit/${productObj._id}`} className="btn btn-info">Edit</Link>
                        </div>
                    )
                })
            }
        </div>
    )


}




export default AllProducts;