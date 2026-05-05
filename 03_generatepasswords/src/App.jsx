import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setname] = useState("vaibhav")
  function handlechanges(e) {
    setname(e.target.value);
  }
  return (
    <>
      <form action="">
        <input type='text' value={name} onChange={handlechanges} placeholder='enter your name'  />
      </form>
      <p>name : {name}</p>
    </>
  )
}

export default App
