import { GameTiles } from "../../GameTiles";

const sampleGames = ["game1", "game2", "game3", "game4"];

export const Sale = () => {
  return (
    <>
      <div>Sale</div>
      <GameTiles games={sampleGames} />
    </>
  );
};
