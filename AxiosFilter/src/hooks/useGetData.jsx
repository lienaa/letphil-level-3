import { useState, useEffect } from "react";
import axios from "axios";

export function useGetPokemon(url) {
  const [pokemonInfo, setPokemonInfo] = useState([]);

  async function getPokemon() {
    try {
      const { data } = await axios.get(url);
      const pokemonResults = data.results;

      // Update Pokemon list
      const results = await Promise.all(
        pokemonResults.map(async (pokemon) => {
          const { data } = await axios.get(pokemon.url);
          return {
            name: capitalizeWords(data.species.name),
            sprite: capitalizeWords(data.sprites.front_default),
            types: data.types.map((t) => capitalizeWords(t.type.name)),
          };
        })
      );
      setPokemonInfo(results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPokemon();
  }, [url]);

  return pokemonInfo;
}

function capitalizeWords(string) {
  return string
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
