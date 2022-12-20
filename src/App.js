import "./styles.css";
import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operands = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (operands.includes(value) && calc === "") ||
      (operands.includes(value) && operands.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!operands.includes(value)) {
      setResult((calc + value).toString());
    }
    return result;
  };

  const createDigit = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const del = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);

    setCalc(value);
  };

  return (
    <section className="app">
      <div className="calculator">
        <div className="display">{calc || "0"}</div>
        <div className="operands">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>x</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={del}>Del</button>
        </div>
        <div className="digits">
          {createDigit()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </section>
  );
}

export default App;
