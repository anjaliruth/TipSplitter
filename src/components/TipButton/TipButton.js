import React from "react";

export default function TipButton({ handleTipAmount }) {
  const tips = [5, 10, 15, 25, 50];
  return (
    <div className="tipsTotal">
      <p className="inputLabel2">Select Tip %</p>
      <div className="tipButtons">
        {tips.map((tip, index) => {
          return (
            <button key={index} onClick={() => handleTipAmount(tip / 100)}>
              {tip}%
            </button>
          );
        })}
        <input onChange = {(event) => handleTipAmount(event.target.value/100)}className="custom" placeholder="Custom" />
      </div>
    </div>
  );
}
