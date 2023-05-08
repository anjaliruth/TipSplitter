import React from 'react'

export default function TipButton({handleTipAmount}) {
  return (
    <div className="tipButtons">
        <h1>Select Tip</h1>
        <div>
        <button onClick={()=> handleTipAmount(0.05)}>5%</button>
        <button onClick={()=> handleTipAmount(0.10)}>10%</button>
        <button onClick={()=> handleTipAmount(0.15)}>15%</button>
        <button onClick={()=> handleTipAmount(0.25)}>25%</button>
        <button onClick={()=> handleTipAmount(0.50)}>50%</button>
        {/* <button onChange={()=> handleTipAmount(0.05)}>Custom</button> */}
        </div>
    </div>
  )
}
