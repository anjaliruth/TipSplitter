import React from 'react'

export default function AmountPpl( {handlenumPeople}){
  return (
    <div>
        <h1>Number of People</h1>
        <input type="number" placeholder="0" onChange={handlenumPeople} />
    </div>
  )
}
