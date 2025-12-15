import { TopGames } from "../TopGames";

export const DashBoard = () => {
  return (
    <>
      <div className="flex flex-col gap-4 items-center">
        <h1>Top Picks:</h1>
        <button>Reroll</button>
        <TopGames />
      </div>
    </>
  );
};
