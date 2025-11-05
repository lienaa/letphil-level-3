import './App.css';
import { User } from "./components/User";

function App() {
  const name = "Alex";

  return (
    <>
      <User name={name} />
    </>
  )
}

export default App
