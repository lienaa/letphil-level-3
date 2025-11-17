import React from "react";
import { useState } from "react";

export const ParagraphToggle = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          if (hidden) {
            setHidden(false);
          } else {
            setHidden(true);
          }
        }}
      >
        {hidden ? "Show" : "Hide"}
      </button>
      <p className={`${hidden ? "hidden" : "block"} py-4 text-left max-w-xl`}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
        ex sapien vitae pellentesque sem placerat. In id cursus mi pretium
        tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
        Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis
        massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper
        vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra
        inceptos himenaeos.
      </p>
    </div>
  );
};
