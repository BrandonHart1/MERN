import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = (props) => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const history = useHistory();

    const createProduct = (e) => {
        e.preventDefault();
        let formInfo = {title, price, description};

        axios.post("http://localhost:800/api/products", formInfo)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <form onSubmit={createProduct}>
                <label htmlFor="">Title</label>
                <input type="text" name="" id="" classname="form-control" onChange={(e) =>  {setTitle(e.target.value)}} value={title}/>
            </form>
        </div>
    )

}