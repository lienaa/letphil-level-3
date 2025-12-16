
import { RouterProvider } from "react-router";
import { router } from "./Router/router";

import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
