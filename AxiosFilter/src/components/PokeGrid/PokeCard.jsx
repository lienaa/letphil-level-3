export const PokeCard = ({ name, sprite, types }) => {
  return (
    <>
      <h1 className="text-2xl">{name}</h1>
      <img className="w-[200px]" src={sprite} alt={name} />
      <div className="flex flex-col gap-2">
        {types.map((type) => (
          <p className="text-2xl border rounded-md px-2" key={name + type}>{type}</p>
        ))}
      </div>
    </>
  );
};