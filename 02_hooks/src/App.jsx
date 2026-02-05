import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter] = useState(0);
  const  addvalue = ()=>{
    // console.log("value is added " + Math.random() );
    counter = counter + 1;
    if(counter > 20){
      setcounter = 20;
    }
    setcounter(counter);
  }
  const remove = ()=>{
    console.log("value is remover");
    counter = counter -1;
    if(counter<0){
      setcounter = 0;
    }
    setcounter(counter);
  }
  return (
    <>
       <h1>hello words</h1>
       <p>count value : {counter} </p>
       <button onClick={addvalue} >add</button>
       <br />
       <button onClick={remove} >remove</button>
    </>
  )
}

export default App
