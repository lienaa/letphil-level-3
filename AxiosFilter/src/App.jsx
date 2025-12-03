import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import { PokeGrid } from "./components/PokeGrid/PokeGrid";
import { ButtonGrid } from "./components/ButtonGrid/ButtonGrid";
import { useGetPokemon } from "./hooks/useGetData";

function App() {
  const getData = async () => {
    const response = await axios.get("http://localhost:3000/");
    const data = response.data;
    console.log(data);
  };

  const options = {
    headers: {
      ContentType: "application/json",
    },
    body: {
      id: 4,
      name: "Tom",
      age: 15,
    },
  };

  const postData = async () => {
    const response = await axios.post(
      "http://localhost:3000/newUser",
      options.body
    );
    console.log(response.data);
    setUsers(response.data);
  };

  const [users, setUsers] = useState([]);
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
      <button onClick={postData}>Post Data</button>
      {users.map((user) => {
        return (
          <p>
            {user.name} {user.age}
          </p>
        );
      })}
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
