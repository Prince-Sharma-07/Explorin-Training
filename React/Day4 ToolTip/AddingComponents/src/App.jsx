/* eslint-disable no-constant-condition */
import React from 'react'

export default function App() {

  return (
    <div className='App flex flex-col'>
      <header className='w-full max-w-full flex items-center relative bg-[#e9e9e9]'>
        <img className='w-10 h-10' src="https://img.icons8.com/fluency/48/microsoft-todo-2019.png" alt="todo-logo" />
        <h1 className='w-full max-w-full text-2xl font-semibold text-center absolute left-0'>Todo</h1>
      </header>

      <main>

        <div className='w-full aspect-6/1 h-auto bg-[#a67575] flex items-center justify-center'>
          carousel
        </div>

        <section className='flex flex-col items-center w-full max-w-full bg-[#e3e3e3] gap-4 p-4'>
          <h2 className='text-xl'>TodoList</h2>
          <button className='px-3 py-1 bg-amber-200 rounded-md border-2 cursor-pointer' >Add Item</button>

          <ul className='flex flex-wrap gap-4 w-full max-w-full bg-amber-50 justify-center'>

            <li className='TodoCard flex flex-col min-w-[30%] flex-1 gap-4 max-w-1/3 p-4 bg-amber-700'>
              <div className='flex justify-between items-center w-full'>
                <span className='text-lg'>Item 1</span>
                <input type="checkbox" />
              </div>
              <textarea className='p-4 border-2 rounded-sm'>
                Sample Description
              </textarea>
            </li>

            <li className='TodoCard flex flex-col min-w-[30%] flex-1 gap-4 max-w-1/3 p-4 bg-amber-700'>
              <div className='flex justify-between items-center w-full'>
                <span className='text-lg'>Item 1</span>
                <input type="checkbox" />
              </div>
              <textarea className='p-4 border-2 rounded-sm'>
                Sample Description
              </textarea>
            </li>

            <li className='TodoCard flex flex-col min-w-[30%] flex-1 gap-4 max-w-1/3 p-4 bg-amber-700'>
              <div className='flex justify-between items-center w-full'>
                <span className='text-lg'>Item 1</span>
                <input type="checkbox" />
              </div>
              <textarea className='p-4 border-2 rounded-sm'>
                Sample Description
              </textarea>
            </li>

            <li className='TodoCard flex flex-col min-w-[30%] flex-1 gap-4 max-w-1/3 p-4 bg-amber-700'>
              <div className='flex justify-between items-center w-full'>
                <span className='text-lg'>Item 1</span>
                <input type="checkbox" />
              </div>
              <textarea className='p-4 border-2 rounded-sm'>
                Sample Description
              </textarea>
            </li>
          </ul>

        </section>
          {true ? (<div className='w-screen h-screen fixed top-0 left-0 flex justify-center items-center'>
                <div className='min-w-40 min-h-32 h-1/2 w-1/3 text-white bg-amber-200 '>content</div>
          </div>) : null}
      </main>
    </div>
  )
}
