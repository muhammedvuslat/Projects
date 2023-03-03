import React, { useState } from "react";

import "./App.css";
import "./style.css";

const App = () => {
  const [tempValue, setTempValue] = useState(20);
  const [tempColor, setTempColor] = useState("mid");

  const increaseTemp = () => {
    if (tempValue === 40) return;

    const newTemp = tempValue + 1;

    setTempValue(newTemp);
    if (tempValue > 20) {
      setTempColor("hot");
    } else if ((tempValue = 20)) {
      setTempColor("mid");
    }
  };

  const decreaseTemp = () => {
    if (tempValue === 0) return;

    const newTemp = tempValue - 1;

    setTempValue(newTemp);
    if (tempValue < 20) {
      setTempColor("cold");
    } else if ((tempValue = 20)) {
      setTempColor("mid");
    }
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display  ${tempColor} `}>
          {tempValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={increaseTemp}>+</button>
        <button onClick={decreaseTemp}>-</button>
      </div>
    </div>
  );
};

export default App;
