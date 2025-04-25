import React from 'react'

export default function Functionality() {
//     const elem = React.createElement('div' , {className: "abc"} , "Hello Vasvi!") // <-- attributes will be given in the form of key:value pair
//   return ( elem )

const child = React.createElement('button' , {className : "abc"} , "Click Me!")
const child2 = React.createElement('button' , {className : "abc"} , "Click Me!")
const parent = React.createElement('div' , {className : "abs"} , [child,child2])
return parent
}
