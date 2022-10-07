const Pokemon = ({pokemon, selectPokemon}) => {
    
    const handleClick = () => {
        selectPokemon(pokemon);
    }

    return (
        <li onClick={handleClick}>{pokemon.name}</li>
    )

}

export default Pokemon;