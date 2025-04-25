import { useState } from 'react'

export default function App() {
  // const arr = useState(0)
  // console.log(arr)
  let [count, setCount] = useState(0)

  function Increament(){
    setCount(count+1)
    console.log(count)
  }

 function handleClick(){
    Increament()
    Increament()
    Increament()
    Increament()
    Increament()
 }

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className="card flex flex-col justify-evenly items-center h-1/2 w-1/5 bg-gray-500 text-white p-3 rounded-md">
        <h1 className='text-2xl'>Simple Counter</h1>
        <span className='text-xl'>Count : {count}</span>
        <button className='bg-black p-2 rounded-md' onClick={handleClick}>Increament</button>
      </div>
    </div>
  )
  
}

