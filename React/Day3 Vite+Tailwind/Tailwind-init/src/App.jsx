import React from 'react'
import './App.css'

export default function App() {
  return (
    <div>
      <div className='bg-red-400 w-[127.3px] rounded-lg flex justify-center items-center p-4'> 
        sample data
      </div>
      <div className="cards2">
        sample data2
      </div>
      <div className="cards3">
        sample data3
      </div>

      <div className='flex justify-center items-center h-[100dvh] w-[100dvw] bg-[#00000020] border-black'>
        <div className='flex flex-col h-1/2 w-1/2 justify-around items-center'>
          <h1>Hello There</h1>
          <button className='bg-orange-400' >Click Me</button>
        </div>
      </div>
    </div>
  )
}