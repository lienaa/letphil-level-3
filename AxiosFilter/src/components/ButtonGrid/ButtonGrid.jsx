export const ButtonGrid = ({ types, onTypeSelect }) => {
  return (
    <>
      <div className="pokemon-types">
        <button key="all" onClick={() => onTypeSelect("all")}>
          all
        </button>
        {types.map((type) => (
          <button key={type} onClick={() => onTypeSelect(type)}>
            {type}
          </button>
        ))}
      </div>
    </>
  );
};
