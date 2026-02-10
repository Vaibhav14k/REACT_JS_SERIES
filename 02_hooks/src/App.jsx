import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let [counter,setcounter] = useState(0);
  // const  addvalue = ()=>{
  //   // console.log("value is added " + Math.random() );
  //   counter = counter + 1;
  //   if(counter > 20){
  //     setcounter = 20;
  //   }
  //   setcounter(counter);
  // }
  // const remove = ()=>{
  //   console.log("value is remover");
  //   counter = counter -1;
  //   if(counter<0){
  //     setcounter = 0;
  //   }
  //   setcounter(counter);
  // }
  let [color,setcolor] = useState("white");
  const blue = ()=>{
    color = "blue";
    setcolor(color);
    console.log("colour is change to the blue ");
    
  }
  const red = ()=>{
    color = "red";
    setcolor(color);
        console.log("colour is change to the red ");

  }
  return (
    <>
       <h1>hello words</h1>
       <p>count value : {color} </p>
       <button onClick={blue} >blue</button>
       <br />
       <button onClick={red} >red</button>
    </>
  )
}

export default App
