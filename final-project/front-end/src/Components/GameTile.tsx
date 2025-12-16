
export const GameTile = ({ game, size }: { game: string, size: string }) => {
  return (
    <div>
      <img
        src="https://www.nwpc.com/wp-content/uploads/2022/05/2x3-placeholder.jpg"
        className={`aspect-[2/3] w-[${size}]`}
      />
      <p>{game}</p>
    </div>
  );
};
