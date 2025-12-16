import { GameTiles } from "../../GameTiles";

const sampleGames = ["game1", "game2", "game3", "game4"];

export const Trending = () => {
  return (
    <>
      <div>Trending</div>
      <GameTiles games={sampleGames} />
    </>
  );
};
