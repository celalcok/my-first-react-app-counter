import React from 'react'

function Footer({message, messageStyle}) {
  return (
    <div className="footer">
        <div className={"message "+messageStyle}>
        {message}
        </div>
    </div>
  )
}

export default Footer