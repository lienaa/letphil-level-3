export const PokeCard = ({ name, sprite, types }) => {
  return (
    <>
      <h1>{name}</h1>
      <img src={sprite} alt={name} />
      <div className="types">
        {types.map((type) => (
          <p key={name + type}>{type}</p>
        ))}
      </div>
    </>
  );
};