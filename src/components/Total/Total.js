import React from 'react'

export default function Total({billAmount, tipPercent, numPeople}){
  return (
    <div>
    <p>
        Total <br />
        <span>/ person</span>
        <br/>
        {tipPercent > 0 && numPeople > 0 ? `$${((billAmount * (1+tipPercent)) / numPeople).toFixed(2)}` : "£0.00"}
    </p>
    </div>
  )
}
