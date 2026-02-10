import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
function App() {
  const [color, setcolor] = useState("black")
  
  return (
    <div>
      <div  className='w-full h-full flex justify-end items-end ' style={{backgroundColor:color}} >
          <div>
            <div className=' border-2  w-full h-full   rounded-3xl overflow-hidden flex flex-wrap justify-end gap-5  ' > 
              <button className='bg-red-400' onClick={()=> setcolor("red")} >red</button>
              <button className='bg-blue-300' >blue</button>
              <button className='bg-yellow-300' > yellow</button>
              <button className='bg-gray-300'>gray</button>
              <button className='bg-rose-700' >rose</button>
              <button className='bg-green-400' >green</button>
              <button className='bg-sky-300'>skyblue</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default App
