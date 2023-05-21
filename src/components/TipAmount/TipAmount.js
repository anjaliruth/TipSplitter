import React from "react";

export default function TipAmount({ billAmount, tipPercent, numPeople,tipMethod,customTipAmount }) {
  return (
    <div className="sectionOutput">
      <div className="outputTitle">
        <p className = "big">Tip Amount </p>
        <p className="small">/ person</p>
      </div>
      <div className="calculatedAmt">
        {/* {numPeople > 0
          ? `£${((billAmount * tipPercent) / numPeople).toFixed(2)}`
          : "£0.00"} */}
          {numPeople > 0
        ? `£${(tipMethod === "percentage"
            ? (billAmount * tipPercent/numPeople)
            : customTipAmount / numPeople
            ).toFixed(2)}`
        : "£0.00"}
      </div>
    </div>
  );
}
