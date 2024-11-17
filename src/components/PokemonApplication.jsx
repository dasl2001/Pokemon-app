import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';
import axios from 'axios';
function PokemonApplication() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [pokemonDetails, setPokemonDetails] = useState(null);
  useEffect(() => {
    async function fetchPokemonList() {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
      setPokemonList(response.data.results);
    }
    fetchPokemonList();
  }, []);
  const fetchPokemonDetails = async () => {
    if (selectedPokemon) {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
      setPokemonDetails(response.data);
    }
  };
  return (
        <div className="container">
          <h1>Pokemon Application</h1>
          <div>
            <select
              value={selectedPokemon}
              onChange={(e) => setSelectedPokemon(e.target.value)}
              style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
            >
              <option value="">Select a Pokemon</option>
              {pokemonList.map((pokemon) => (
                <option key={pokemon.name} value={pokemon.name}>
                  {pokemon.name}
                </option>
              ))}
            </select>
            <button onClick={fetchPokemonDetails}>Get Pokemon Info</button>
          </div>
      
          {pokemonDetails && <Pokemon details={pokemonDetails} />}
        </div>
      );      
}
export default PokemonApplication;
