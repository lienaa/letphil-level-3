import { PokeCard } from "./PokeCard";

export const PokeGrid = ({ pokemons }) => {
  return (
    <>
      <ul className="pokemon-grid">
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <PokeCard
              name={pokemon.name}
              sprite={pokemon.sprite}
              types={pokemon.types}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
