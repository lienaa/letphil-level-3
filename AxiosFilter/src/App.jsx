import { useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>


      <h1>Pokemon 151 Search</h1>


    </>
  )
}

export default App
