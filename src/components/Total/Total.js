import React from 'react'

export default function Total({billAmount, tipPercent, numPeople}){
  return (
    <div className="sectionOutput">
<div className="outputTitle">
        <p className = "big1"> Total </p>
        <p className="small1">/ person</p>
        </div>
      <div className="calculatedAmt">
        {tipPercent > 0 && numPeople > 0 ? `$${((billAmount * (1+tipPercent)) / numPeople).toFixed(2)}` : "£0.00"}
    </div>
    </div>
  )
}
