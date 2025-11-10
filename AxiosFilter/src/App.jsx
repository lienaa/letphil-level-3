import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import { PokeGrid } from "./components/PokeGrid/PokeGrid";
import { ButtonGrid } from "./components/ButtonGrid/ButtonGrid";

function App() {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const pokeUrl = `https://pokeapi.co/api/v2/pokemon?limit=151`;

  useEffect(() => {
    async function getPokemon() {
      try {
        const { data } = await axios.get(pokeUrl);
        const pokemonResults = data.results;
        setPokemonInfo(
          await Promise.all(
            pokemonResults.map(async (pokemon) => {
              const { data } = await axios.get(pokemon.url);
              return {
                name: data.species.name,
                sprite: data.sprites.front_default,
                types: data.types.map((t) => t.type.name),
              };
            })
          )
        );
      } catch (error) {
        console.log(error);
      }
    }

    getPokemon();
  }, []);

  return (
    <>
      <h1>Pokemon Types</h1>
      <ButtonGrid />
      <PokeGrid pokemons={pokemonInfo} />
    </>
  );
}

export default App;
