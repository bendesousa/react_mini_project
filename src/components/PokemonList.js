import Pokemon from "./Pokemon";

const PokemonList = ({pokemons}) => {

    const pokemonListItem = pokemons.map((result)=>{
        return <Pokemon
                    pokemon={result}
                />
    })

    return(
        <ul>
            {pokemonListItem}
        </ul>
    );

}

export default PokemonList;