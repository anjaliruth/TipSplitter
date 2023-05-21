import React from "react";

export default function TipAmount({ billAmount, tipPercent, numPeople }) {
  return (
    <div className="sectionOutput">
      <div className="outputTitle">
        <p className = "big">Tip Amount </p>
        <p className="small">/ person</p>
      </div>
      <div className="calculatedAmt">
        {tipPercent > 0 && numPeople > 0
          ? `£${((billAmount * tipPercent) / numPeople).toFixed(2)}`
          : "£0.00"}
      </div>
    </div>
  );
}
