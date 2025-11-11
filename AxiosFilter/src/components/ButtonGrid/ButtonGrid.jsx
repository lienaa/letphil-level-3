export const ButtonGrid = ({ types, onTypeSelect }) => {
  return (
    <>
      <div className="pokemon-types my-10 flex flex-wrap gap-2 max-w-6xl mx-auto justify-center">
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
