import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import { PokeGrid } from "./components/PokeGrid/PokeGrid";
import { ButtonGrid } from "./components/ButtonGrid/ButtonGrid";
import { useGetPokemon } from "./hooks/useGetData";

function App() {
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const pokeUrl = `https://pokeapi.co/api/v2/pokemon?limit=151`;

  const results = useGetPokemon(pokeUrl);
  console.log(results);

  // Update types

  results.forEach((pokemon) => {
    pokemon.types.forEach((type) => {
      if (!pokemonTypes.includes(type)) {
        setPokemonTypes([...pokemonTypes, type]);
      }
    });
  });

  return (
    <>
      <h1 className="text-6xl font-medium">Pokemon Types</h1>
      <ButtonGrid types={pokemonTypes} onTypeSelect={setFilterType} />
      <PokeGrid
        pokemons={
          filterType === "All"
            ? results
            : results.reduce(
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
