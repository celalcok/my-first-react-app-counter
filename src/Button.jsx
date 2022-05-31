import React from 'react'
function Button({text, click,name}) {

  return (
    <button name={name}  onClick={click} className="btn" >{text}</button>
  )
}

export default Button