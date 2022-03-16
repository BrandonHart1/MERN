import React from 'react';
import { useParams } from "react-router";

const WordColor = () => {

    const { word, fontColor, backgroundColor } = useParams();
    console.log("word", word);
    console.log("fontColor", fontColor);
    console.log("backgroundColor", backgroundColor);

    return (
        <div>
            <h1 style={{ fontColor: fontColor, backgroundColor: backgroundColor}}>{word}</h1>
        </div>
    )
}

export default WordColor;