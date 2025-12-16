import { GameCard } from "./GameCard";

export const GameCards = ({ games }) => {
  return (
    <>
      <ul className="flex flex-col gap-2">
        {games.map((game) => {
          return (
            <>
              <li>
                <GameCard />
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};
