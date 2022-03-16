import React from 'react';
import { useParams } from "react-router";

const Number = () => {

    const { number } = useParams();
    console.log("number", number)

    return (
        <div>
            {
                isNaN(number) ?
                <h3>Please use a number</h3>:
                <h1>The number is: {number}</h1>
            }
        </div>
    )

}


export default Number