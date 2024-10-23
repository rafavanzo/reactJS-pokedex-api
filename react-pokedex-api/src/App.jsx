import './App.css'
import React, { useState, useEffect } from 'react';
import {PokemonCard} from './PokemonCard/PokemonCard';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemons = async () => {
    try {
      const promises = [];
      for (let i = 1; i <= 151; i++) {
        // Fazendo requisições para os primeiros 30 Pokémon
        promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`));
      }
      const responses = await Promise.all(promises);
      const data = await Promise.all(responses.map(res => res.json()));
      setPokemonList(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  console.log(pokemonList);

  return (
    <div className="pokedex-list">
      {pokemonList.map(pokemon => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          nome={pokemon.name}
          altura={(pokemon.height / 10).toFixed(1)}
          peso={(pokemon.weight / 10).toFixed(1)}
          tipo={pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}
          imagem={pokemon.sprites.front_default}
        />
      ))}
    </div>
  );
};

export default App;
