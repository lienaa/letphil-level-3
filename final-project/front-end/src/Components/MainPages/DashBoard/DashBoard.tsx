import { TopGames } from "./TopGames";
import { Trending } from "./Trending";
import { Recent } from "./Recent";
import { Sale } from "./Sale";

export const DashBoard = () => {
  return (
    <>
      <div className="flex flex-col gap-4 items-center">
        <h1>Top Picks:</h1>
        <button>Reroll</button>
        <TopGames />
        <Recent />
        <Trending />
        <Sale />
      </div>
    </>
  );
};
