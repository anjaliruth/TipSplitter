import "./App.css";
import BillAmount from "./components/BillAmount/BillAmount";
import { useState } from "react";
import TipButton from "./components/TipButton/TipButton";
import AmountPpl from "./components/AmountPpl/AmountPpl";
import TipAmount from "./components/TipAmount/TipAmount";
import Total from "./components/Total/Total";

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const [numPeople, setNumPeople] = useState(0);

  //function to set Bill state based on input value
  function handleBillAmount(e) {
    setBillAmount(e.target.value);
  }

  function handleTipAmount(amount) {
    setTipPercent(amount);
  }

  function handlenumPeople(e) {
    setNumPeople(e.target.value);
  }

  console.log(billAmount);
  console.log(tipPercent);
  console.log(numPeople);
  return (
    <div>
      <h1 className="title">Tip Splitter</h1>
      <div className="App">
        <div className="inputFields">
          <BillAmount handleBillAmount={handleBillAmount} />
          <TipButton handleTipAmount={handleTipAmount} />
          <AmountPpl handlenumPeople={handlenumPeople} />
        </div>
        <div className="outputFields">
          <TipAmount
            billAmount={billAmount}
            tipPercent={tipPercent}
            numPeople={numPeople}
          />
          <Total
            billAmount={billAmount}
            tipPercent={tipPercent}
            numPeople={numPeople}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
