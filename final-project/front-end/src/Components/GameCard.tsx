import React from "react";

export const GameCard = ({ game }) => {
  return (
    <>
      <div className="flex gap-2">
        <img src="https://placehold.co/200" className="w-[200px]" />
        <div className="flex flex-col">
          <p>Title: {game}</p>
          <p>Stats: </p>
        </div>
      </div>
    </>
  );
};
