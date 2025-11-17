import React from "react";

export function Input() {
  return (
    <div className="py-8">
      <form>
        <input type="text" placeholder="enter text" />
        <input type="submit" />
      </form>
    </div>
  );
}
