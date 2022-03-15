import React, { useState } from 'react';

// state variable to save the array pokemonList
const Pokemon = () => {
    let [pokemonList, setPokemonList] = useState([])

    // ----- function for the event listener(button) ----- 
    const getPokemonAPI = () => {
        console.log("Making the API call")

        // -------- fetch to make the API call --------
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
        
        .then((response) => {
            return response.json()
        })

        .then((response) => {
            console.log(response)
            setPokemonList(response.results)
        })

        .catch((err) => {
            console.log("Something Went Wrong!!! Error When Fetching!!!")
        })
        
    }

    return (
        <>
            <button onClick= {getPokemonAPI}>Click Here To See The List of Pokemon</button>
            {
                pokemonList.map((pokemonObj, index) => {
                    return <div>
                        <h3>{pokemonObj.name}</h3>
                        <hr />
                    </div>
                })
            }
        </>
    )
    
}






export default Pokemon;