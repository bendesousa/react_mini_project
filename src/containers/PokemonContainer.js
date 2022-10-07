import { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";
import Search from "../components/Search";

const PokemonContainer = () => {

    const [pokemons, setPokemons] = useState([]);

    const fetchPokemons = async () => {
        console.log("hello");
        const response = await fetch ("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151");
        const jsonPokemons = await response.json();

        setPokemons(jsonPokemons.results);
        
    };

    useEffect(() => {
        fetchPokemons();
        
    }, []);

    const [filteredPokemons, setFilteredPokemons] = useState();

    const filterPokemons = (searchTerm) => {
        // console.log("search term: ", searchTerm);
        const foundCakes = cakes.filter(cake => {
        return cake.cakeName.toLowerCase().includes(searchTerm.toLowerCase())
        })
        //console.log("found cakes: ", foundCakes);
        setfilteredCakes(foundCakes)
    };

    console.log(pokemons);

    return (
        <div>
            <Search />
            <PokemonList pokemons={pokemons}/>
        </div>
        
    )


}

export default PokemonContainer;