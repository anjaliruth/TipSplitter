import React from "react";

export default function TipButton({ handleTipPercent, handleCustomTipAmount, customTipAmount }) {
  const tips = [5, 10, 15, 25, 50];
  return (
    <div className="tipsTotal">
      <p className="inputLabel2">Select Tip %</p>
      <div className="tipButtons">
        {tips.map((tip, index) => {
          return (
            <button key={index} onClick={() => handleTipPercent(tip / 100)}>
              {tip}%
            </button>
          );
        })}
        <input onChange = {(event) => handleCustomTipAmount(event.target.value)}className="custom" placeholder="Custom" value={customTipAmount}/>
      </div>
    </div>
  );
}
