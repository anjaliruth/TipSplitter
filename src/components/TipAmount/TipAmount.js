import React from 'react'

export default function TipAmount({billAmount, tipPercent, numPeople}) {
  return (
    <div>
    <p>
        Tip Amount <br />
        <span>/ person</span>
        <br/>
        {tipPercent > 0 && numPeople > 0 ? `$${((billAmount * tipPercent) / numPeople).toFixed(2)}` : "£0.00"}
    </p>
    </div>
  )
}
