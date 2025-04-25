import {createRoot} from 'react-dom/client'
import React from 'react'
import Functionality from './Functionality'

const sde = document.getElementsByTagName("sde")[0]
// sde.innerHTML = "<h1>Hello</h1>"   <-- this will make changes in actual dom

// createRoot(sde).render(<h1>Hello</h1>) <-- changes made in virtual dom

// const ele = document.createElement('div') create element on actual dom
// const ele = React.createElement('div' , null , "Hello React!") // <-- create element on VDOM (parameterd take type of element , attribute , innerText respectively)

/* Although after creating the root element for VDOM We will not do any changes in this same file.
   We will create a new fill to render elements in it i.e functionality.jsx.
*/

createRoot(sde).render(<Functionality/>) // <-- It will render the whole component.

