import { GameTile } from "./GameTile";

export const GameTiles = ({ games }) => {
  return (
    <>
      <ul>
        <li className="flex gap-4">
          {games.map((game) => {
            return <GameTile game={game} size={"200px"} />;
          })}
        </li>
      </ul>
    </>
  );
};
