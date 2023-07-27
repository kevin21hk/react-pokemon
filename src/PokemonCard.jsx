
const PokemonCard = ({pokemon}) => {
if (!pokemon){
    return null;
}

return(
<div className="pokemon-card">
<p>Pokemon Name: {pokemon.name}</p>
<p>Type: {pokemon.types[0].type.name}</p>
<img src={pokemon.sprites.front_default}/>

</div>
)

}
export default PokemonCard

