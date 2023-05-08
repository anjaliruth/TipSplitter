import React from 'react'

export default function BillAmount({handleBillAmount}){
    
  return (
    <div className="billAmount">
        <label htmlFor="billAmount">Bill Amount</label>
        <input id="billAmount" name="billAmount" onChange= {handleBillAmount}/>
    </div>
  )
}
