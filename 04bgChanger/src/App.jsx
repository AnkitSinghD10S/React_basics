import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor]=useState("olive") 
  return (
    <div className='w-full h-screen duration-200 '
    style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl'>
            <button onClick={()=>setColor('red')} className='outline-none rounded-xl px-4' style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=>setColor('green')} className='outline-none rounded-xl px-4' style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=>setColor('yellow')} className='outline-none  rounded-xl px-4' style={{backgroundColor:"yellow"}}>Yellow</button>
            <button onClick={()=>setColor('blue')} className='outline-none rounded-xl px-4' style={{backgroundColor:"blue"}}>blue</button>
            <button onClick={()=>setColor('orange')} className='outline-none rounded-xl px-4' style={{backgroundColor:"orange"}}>Orange</button>
            <button onClick={()=>setColor('purple')} className='outline-none rounded-xl px-4' style={{backgroundColor:"purple"}}>Purple</button>
          </div>
      </div>
    </div>
  )
}

export default App
