import Pokemon from "./Pokemon";

const PokemonList = ({pokemons, selectPokemon}) => {

    const pokemonListItem = pokemons.map((result, id)=>{
        return <Pokemon
                    pokemon={result}
                    key={id}
                    selectPokemon={selectPokemon}
                />
    })

    return(
        <ul>
            {pokemonListItem}
        </ul>
    );

}

export default PokemonList;