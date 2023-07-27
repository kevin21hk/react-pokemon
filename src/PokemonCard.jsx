const PokemonCard = ({pokemon}) => {
    const pokemonTypes = [
    { name: "Normal", color: "#A8A878" },
    { name: "Fire", color: "#F08030" },
    { name: "Water", color: "#6890F0" },
    { name: "Electric", color: "#F8D030" },
    { name: "Grass", color: "#78C850" },
    { name: "Ice", color: "#98D8D8" },
    { name: "Fighting", color: "#C03028" },
    { name: "Poison", color: "#A040A0" },
    { name: "Ground", color: "#E0C068" },
    { name: "Flying", color: "#A890F0" },
    { name: "Psychic", color: "#F85888" },
    { name: "Bug", color: "#A8B820" },
    { name: "Rock", color: "#B8A038" },
    { name: "Ghost", color: "#705898" },
    { name: "Dragon", color: "#7038F8" },
    { name: "Dark", color: "#705848" },
    { name: "Steel", color: "#B8B8D0" },
    { name: "Fairy", color: "#EE99AC" }
  ];


if (!pokemon){
        return (
<div className="pokemon-card">
<p>No Pokemon found.</p>
</div>

        )
    
}

const type = pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1);
const typeObj = pokemonTypes.find(obj => obj.name === type);

return(
<div className="pokemon-card" style={{ backgroundColor: typeObj ? typeObj.color : '#fff' }}>
    <div className="pokemon-card-inner">
<p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
<p>Type: {pokemon.types[0].type.name}</p>
<img className="official-artwork" src={pokemon.sprites.other['official-artwork'].front_default} 
alt="pokemon official artwork"/>

</div>
</div>
)

}
export default PokemonCard