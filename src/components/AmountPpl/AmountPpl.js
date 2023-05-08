import React from 'react'
import personIcon from "../../images/icon-person.svg"
export default function AmountPpl( {handlenumPeople}){
  return (
    <div className="amtPeople">
        <p className="inputLabel3">Number of People</p>
        <input onChange={handlenumPeople} />
    </div>
  )
}
