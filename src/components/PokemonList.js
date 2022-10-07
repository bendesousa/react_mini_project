import Pokemon from "./Pokemon";

const PokemonList = ({pokemons}) => {

    const pokemonListItem = pokemons.map((result, id)=>{
        return <Pokemon
                    pokemon={result}
                    key={id}
                    selectPokemon={selectCountry}
                />
    })

    return(
        <ul>
            {pokemonListItem}
        </ul>
    );

}

export default PokemonList;