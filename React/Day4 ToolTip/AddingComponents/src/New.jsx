import React from 'react'
import Outer from './outer'
import ArrowToolTip from './ArrowToolTip'

export default function New(rest) {
    console.log("Rest from New: -> ", rest)
  return (
    <div>
      <ArrowToolTip/>
    </div>

  )
}
