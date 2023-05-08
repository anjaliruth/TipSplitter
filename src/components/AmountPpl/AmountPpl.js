import React from 'react'

export default function AmountPpl( {handlenumPeople}){
  return (
    <div className="amtPeople">
        <p className="amtPeopleTitle">Number of People</p>
        <input type="number" placeholder="0" onChange={handlenumPeople} />
    </div>
  )
}
