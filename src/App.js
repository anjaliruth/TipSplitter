import "./App.css";
import BillAmount from "./components/BillAmount/BillAmount";
import { useState } from "react";
import TipButton from "./components/TipButton/TipButton";
import AmountPpl from "./components/AmountPpl/AmountPpl";
import TipAmount from "./components/TipAmount/TipAmount";
import Total from "./components/Total/Total";

function App() {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercent, setTipPercent] = useState(0);
  const [numPeople, setNumPeople] = useState("");
  const [customTipAmount, setCustomTipAmount] = useState(0);
  const [tipMethod, setTipMethod] = useState("");

  //function to set Bill state based on input value
  function handleBillAmount(e) {
    setBillAmount(parseFloat(e.target.value));
  }

  function handleTipPercent(amount) {
    setTipMethod("percentage");
    setTipPercent(amount);
  }
  function handleCustomTipAmount(amount) {
    setTipMethod("custom")
    setCustomTipAmount(parseFloat(amount));
  }

console.log(billAmount)
  function handlenumPeople(e) {
    setNumPeople(e.target.value);
  }

  function handleReset(){
    setTipPercent(0);
    setCustomTipAmount("");
    setTipMethod("percentage");
    setBillAmount(""); // Instead of 0, set this to an empty string
    setNumPeople(""); 
  }
  console.log(`Bill amt:${billAmount}`);
  console.log(tipPercent);
  console.log(numPeople);
  return (
    <div>
      <h1 className="title">Tip Splitter</h1>
      <div className="App">
        <div className="inputFields">
          <BillAmount handleBillAmount={handleBillAmount} billAmount={billAmount}/>
          <TipButton handleTipPercent={handleTipPercent} handleCustomTipAmount={handleCustomTipAmount} tipPercent={tipPercent} customTipAmount={customTipAmount} />
          <AmountPpl handlenumPeople={handlenumPeople} numPeople={numPeople} />
        </div>
        <div className="outputFields">
          <TipAmount
            billAmount={billAmount}
            tipPercent={tipPercent}
            numPeople={numPeople}
            tipMethod={tipMethod}
            customTipAmount={customTipAmount}
          />
          <Total
            billAmount={billAmount}
            tipPercent={tipPercent}
            tipMethod={tipMethod}
            customTipAmount={customTipAmount}
            numPeople={numPeople}
          />
          <button onClick = {handleReset}className="resetButton">RESET</button>
        </div>
      </div>
    </div>
  );
}

export default App;
