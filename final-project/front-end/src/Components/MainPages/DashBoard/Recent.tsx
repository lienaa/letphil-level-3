import { GameTiles } from "../../GameTiles";

const sampleGames = ["game1", "game2", "game3", "game4"];

export const Recent = () => {
  return (
    <>
      <div>Recent</div>
      <GameTiles games={sampleGames} />
    </>
  );
};
