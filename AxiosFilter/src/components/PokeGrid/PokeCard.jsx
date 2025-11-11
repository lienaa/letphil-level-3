export const PokeCard = ({ name, sprite, types }) => {
  return (
    <>
      <h1 className="text-2xl">{name}</h1>
      <img className="w-[200px]" src={sprite} alt={name} />
      <div>
        {types.map((type) => (
          <p className="text-2xl" key={name + type}>{type}</p>
        ))}
      </div>
    </>
  );
};