import React from "react";
import { useState } from "react";

export const Switch = () => {
  const [switchOn, setSwitchOn] = useState(false);
  return (
    <div className="py-8">
      <h1>Switch</h1>
      <button
        onClick={() => {
          if (switchOn) {
            setSwitchOn(false);
          } else {
            setSwitchOn(true);
          }
        }}
      >
        {switchOn ? "On" : "Off"}
      </button>
    </div>
  );
};
