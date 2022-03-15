import React, { useState } from 'react';
import axios from 'axios';

// state variable to save the pokemonList array.
const Pokemon = () => {
    let [pokemonList, setPokemonList] = useState([])

    // ----- function for the event listener(button) ----- 
    const getPokemonAPI = () => {
        console.log("Making the API call")

        // -------- fetch to make the API call --------
        // fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")

        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
        
        // // ------- Return the information in json format ---------
        // .then((response) => {
        //     return response.json()
        // })

        // -------- Show the results of the API -----------------
        .then((response) => {
            console.log(response)
            setPokemonList(response.data.results)
        })

        // ------------- Possibly catch any errors from the API/Display an error message ---------------
        .catch((err) => {
            console.log("Something Went Wrong!!! Error When Fetching!!!")
        })
        
    }

    return (
        <>
            <button onClick= {getPokemonAPI}>Fetch Pokemon</button>
            {
                // -------- iterate through the array and print out the specified information(name) --------
                pokemonList.map((pokemonObj, index) => {
                    return <div key={index}>
                        <h3>{pokemonObj.name}</h3>
                        <hr />
                    </div>
                })
            }
        </>
    )
    
}






export default Pokemon;