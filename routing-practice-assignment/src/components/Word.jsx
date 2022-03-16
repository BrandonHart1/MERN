import React from 'react';
import { useParams } from "react-router";


const Word = () => {
    const { id } = useParams();
    console.log("id", id)

    return (
        <div>
            <h1>The word is: {id}</h1>
        </div>
        )
}

export default Word;