import { PokeCard } from "./PokeCard";

export const PokeGrid = ({ pokemons }) => {
  return (
    <>
      <ul className="pokemon-grid flex flex-wrap gap-x-2 gap-y-10 max-w-6xl mx-auto">
        {pokemons.map((pokemon) => (
          <li key={pokemon.name} className="p-4 flex flex-col border rounded-xl items-center mx-auto">
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
