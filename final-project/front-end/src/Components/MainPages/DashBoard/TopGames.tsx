import { GameTile } from "../../GameTile";

const game: string="game"

export const TopGames = () => {
  return (
    <>
      <p>TopGames</p>
      <ol className="flex gap-4 justify-center">
        <li><GameTile game={game} size={"300px"}/></li>
        <li><GameTile game={game} size={"300px"}/></li>
        <li><GameTile game={game} size={"300px"}/></li>
      </ol>
    </>
  );
};
