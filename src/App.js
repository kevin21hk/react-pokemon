
import './App.css';
import pballicon from './pballicon.png';
import PokemonCard from './PokemonCard'
import {useState, useEffect} from 'react'
function App() {

const APIURL = "https://pokeapi.co/api/v2/pokemon/"
const [pokemon, setPokemon] = useState('');
const [searchTerm, setSearchTerm] = useState('');


//search pokemon function

const search = async () => {
  try {
const response = await fetch(`${APIURL}${searchTerm}`);
if (!response.ok) {
  throw new Error('Pokemon not found');
}
const data = await response.json();
setPokemon(data);
  } catch (error) {
    console.error(error);
    setPokemon(null);
  }
}
                
useEffect(()=>{
  console.log(pokemon)
  },[pokemon])

  return (
    <div className="App">
      <header className="App-header">


<h1>PokéSearch</h1>
      
<div className="search-box">
        <input 
        placeholder="Type a pokemon name here"
        onChange={(event) => setSearchTerm(event.target.value)}
        value={searchTerm}
        />
        <img src={pballicon} 
        alt="pokeball search icon"
        onClick={search}
        />

        </div>

        <PokemonCard pokemon={pokemon}/>
      </header>



    </div>
  );
}

export default App;
