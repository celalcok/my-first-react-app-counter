import React from 'react'

function Display({count,displayAnimation}) {
  return (
    <div className={"display "+displayAnimation}>{count}</div>
  )
}

export default Display