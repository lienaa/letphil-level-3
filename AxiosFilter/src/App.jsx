import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import { PokeGrid } from "./components/PokeGrid/PokeGrid";
import { ButtonGrid } from "./components/ButtonGrid/ButtonGrid";

function App() {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [filterType, setFilterType] = useState("all");
  const pokeUrl = `https://pokeapi.co/api/v2/pokemon?limit=151`;

  async function getPokemon() {
    try {
      const { data } = await axios.get(pokeUrl);
      const pokemonResults = data.results;

      // Update Pokemon list
      const results = await Promise.all(
        pokemonResults.map(async (pokemon) => {
          const { data } = await axios.get(pokemon.url);
          return {
            name: data.species.name,
            sprite: data.sprites.front_default,
            types: data.types.map((t) => t.type.name),
          };
        })
      );
      setPokemonInfo(results);

      // Update types
      const typeSet = new Set();
      results.forEach((pokemon) => {
        pokemon.types.forEach((type) => {
          typeSet.add(type);
        });
      });
      setPokemonTypes(Array.from(typeSet));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      <h1 className="text-6xl font-medium">Pokemon Types</h1>
      <ButtonGrid types={pokemonTypes} onTypeSelect={setFilterType} />
      <PokeGrid
        pokemons={
          filterType === "all"
            ? pokemonInfo
            : pokemonInfo.reduce(
                (acc, pokemon) =>
                  pokemon.types.includes(filterType) ? [...acc, pokemon] : acc,
                []
              )
        }
      />
    </>
  );
}

export default App;
