import { useState } from "react";
import { GameCards } from "../GameCards";

const sampleGames = ["game1", "game2", "game3", "game4", "game5", "game1", "game2", "game3", "game4", "game5"]

export const Library = () => {
  // Controls game filter
  type Filter =
    | "Current"
    | "Complete"
    | "On Hold"
    | "Dropped"
    | "Plan to Play"
    | "All";
  const [filter, setFilter] = useState<Filter>("All");
  
  return (
    <>
      <nav className="flex gap-4 p-2 border border-black">
        <button onClick={() => setFilter("Current")}>Currently Playing</button>
        <button onClick={() => setFilter("Complete")}>Completed</button>
        <button onClick={() => setFilter("On Hold")}>On Hold</button>
        <button onClick={() => setFilter("Dropped")}>Dropped</button>
        <button onClick={() => setFilter("Plan to Play")}>Plan to play</button>
        <button onClick={() => setFilter("All")}>All Games</button>
      </nav>
      <p>Filter: {filter}</p>
      <GameCards games={sampleGames} />

    </>
  );
};
