import React from 'react'

export default function App() {
  return (
    <div className=' w-screen h-screen bg-[#fffff9] flex justify-center items-center'>
      <div className='w-[750px] h-[550px] border-4 border-black rounded-4xl bg-[#00000020] flex flex-col justify-evenly items-center'>
        <span className='text-8xl'>Hello There</span>
        <button className=' px-20 py-8 text-7xl text-white border-8 border-red-500 rounded-4xl bg-amber-500 flex justify-center items-center'>Click Me</button>
      </div>
    </div>
  )
}


