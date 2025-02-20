import { useState } from "react";
import "./calculator.css"

const Calculator = () => {
    const [input, setInput] = useState(0);
  
    const handleClick = (value) => {
      setInput((prev) => prev + value);
    };
  
    const clearInput = () => {
      setInput("");
    };
  
    const calculateResult = () => {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    };
  
    return (
      <div className="calculator">
        <h1>React Calculator</h1>
        <input type="text" value={input} readOnly />
        <div className="keypad">
          {["7", "8", "9", "+"].map((item) => (
            <button onClick={() => handleClick(item)} key={item}>{item}</button>
          ))}
          {["4", "5", "6", "-"].map((item) => (
            <button onClick={() => handleClick(item)} key={item}>{item}</button>
          ))}
          {["1", "2", "3", "*"].map((item) => (
            <button onClick={() => handleClick(item)} key={item}>{item}</button>
          ))}
          <button onClick={clearInput}>C</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={calculateResult}>=</button>
          <button onClick={() => handleClick("/")}>/</button>
        </div>
      </div>
    );
  };
  
  export default Calculator;