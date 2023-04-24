import React, { useState, useEffect } from 'react';
import PokeForm from '../components/PokeForm';
import PokeDisplay from '../components/PokeDisplay';

export default function Pokemon() {

    const [pokeSearch, setPokeSearch] = useState('pikachu');
    const [pokeObj, setPokeObj] = useState({});
    console.log("Poke Object", pokeObj);
    
    useEffect(() => {
        // Define async function
        async function fetchData(){
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeSearch.toLowerCase()}`)
            if (!response.ok){
            } else {
                let data = await response.json();
                setPokeObj(data);
            };
        };
        // Execute the function
        fetchData();
    }, [pokeSearch]);

    return (
        <>
            <PokeForm updatePoke={setPokeSearch} />
            <PokeDisplay pokeInfo={pokeObj} />
        </>
    )
}
