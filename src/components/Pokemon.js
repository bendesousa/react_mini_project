const Pokemon = ({pokemon, selectPokemon}) => {
    
    const handleClick = () => {
        selectPokemon(pokemon);
    }

    return (
        <div id="pokemon-names">
            <li onClick={handleClick}>{pokemon.name}</li>
        </div>
        
    )

}

export default Pokemon;