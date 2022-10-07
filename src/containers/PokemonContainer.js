import { useEffect, useState } from "react";

const PokemonContainer = () => {

    const [pokemon, setPokemon] = useState([]);

    const fetchPokemon = async () => {
        const response = await fetch ("https://pokeapi.co/api/v2/pokemon-species?offset=0&limit=151");
        const jsonPokemon = await response.json();

        setPokemon(jsonPokemon);
    }

    useEffect(() => {
        fetchPokemon();
    }, [])

    return {
        


    }

}

export default PokemonContainer;