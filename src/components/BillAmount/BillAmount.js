import React from "react";

export default function BillAmount({ handleBillAmount }) {
  return (
    <div className="billAmount">
      <label htmlFor="billAmount" className="inputLabel1">
        <div />
        Bill
      </label>
      {/* <img src={dollarIcon} alt="dollar icon" className="dollarIcon"/> */}
      <input id="billAmount" name="billAmount" onChange={handleBillAmount} />
    </div>
  );
}
