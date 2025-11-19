import React from "react";
import { useState } from "react";

export const Password = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <input type={visible ? "text" : "password"} id="myPassword"></input>
      <input
        type="checkbox"
        onClick={() => {
          const myPassword = document.getElementById("myPassword");
          if (visible) {
            setVisible(false);
          } else {
            setVisible(true);
          }
        }}
      />
    </div>
  );
};
