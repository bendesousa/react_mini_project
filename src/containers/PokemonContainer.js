import { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";
import Search from "../components/Search";
import PokemonDetail from "../components/PokemonDetail";

const PokemonContainer = () => {

    const [pokemons, setPokemons] = useState([]);
    // const [pokemonUrls, setPokemonUrls] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const fetchPokemons = async () => {
        const response = await fetch ("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151");
        const jsonPokemons = await response.json();

        setPokemons(jsonPokemons.results);
        
    };

    // const getPokemonDetails = async () => {
    //     // Promise.all()
    //     const pokemonUrls = [];
    //     for(let i = 1; i < 151; i++){
    //         pokemonUrls.push(`https://pokeapi.co/api/v2/pokemon/${}/`);
    //     }

    //     const pokemonPromises = pokemonUrls.map( async (url) => {
    //         const response = await fetch(url);
    //         const jsonPokemon = await response.json();
    //         setPokemonUrls(jsonPokemon);
    //     })

    useEffect(() => {
        fetchPokemons();
        
    }, []);

    const [filteredPokemons, setFilteredPokemons] = useState();

    const filterPokemons = (searchTerm) => {
        
        const foundPokemon = pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        // `https://pokeapi.co/api/v2/pokemon/${searchTerm}/` 
        })
        setFilteredPokemons(foundPokemon)
    };

    const selectPokemon = (pokemon) => {
        setSelectedPokemon(pokemon);
    }

    return (
        <div>
            <Search filterPokemon={filterPokemons}/>
            <PokemonList pokemons={filteredPokemons ? filteredPokemons : pokemons} selectPokemon={selectPokemon}/>
            {selectedPokemon ? 
                <PokemonDetail 
                    selectedPokemon={selectedPokemon}
                /> 
                : <div></div>
            }
        </div>
        
    )


}

export default PokemonContainer;