import './App.css';
import { User } from "./components/User";

function App() {
  const name = "Alex";

  return (
    <>
      <User>
        <div>{name}</div>
      </User>
    </>
  )
}

export default App
