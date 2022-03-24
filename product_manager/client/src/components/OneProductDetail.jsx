import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios'; // make api call with react
import {useHistory } from "react-router-dom"


const OneProductDetail = () => {

    const { _id } = useParams();
    const [info, setInfo] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/ninjas/`)
    })

    return (
        <div>
            <h3>Product Details</h3>
            <h5>Title: </h5>
            <h5>Price: </h5>
            <h5>Description: </h5>
        </div>        
    )
    
}




export default OneProductDetail;




