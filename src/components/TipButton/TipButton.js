import React from 'react'

export default function TipButton({handleTipAmount}) {

  const tips =[5,10,15,25,50]
  return (
    <div >
        <p className = "buttonsTitle">Select Tip %</p>
        <div className="tipButtons" >
{tips.map((tip, index) => {
  return <button key={index} onClick={()=> handleTipAmount(tip/100)}>{tip}%</button>
})}
        </div>
    </div>
  )
}
