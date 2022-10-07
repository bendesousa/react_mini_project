const PokemonDetail = ({selectedPokemon}) => {
   
    return(
        <div id="pokemon-detail">
            <h2>{selectedPokemon.name}</h2>
            <ul>
                <li>Pokemon URL: {selectedPokemon.url}</li>
            </ul>
        </div>
    )
}

export default PokemonDetail;