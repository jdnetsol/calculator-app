import React, { useState } from "react";
import { Keypad } from "./Keypad";
import { Display } from "./Display";
import { History } from "./History";
const Parser = require("expr-eval").Parser;

export const Calculator = () => {
  const [formula, setFormula] = useState("");
  const [result, setResult] = useState();
  const [calculations] = useState([]);

  var formulaParser = new Parser({
    operators: {
      // These default to true, but are included to be explicit
      add: true,
      //   concatenate: true,
      //   conditional: true,
      divide: true,
      //   factorial: true,
      multiply: true,
      //   power: true,
      //   remainder: true,
      subtract: true,

      // Disable and, or, not, <, ==, !=, etc.
      logical: false,
      comparison: false,

      // The in operator is disabled by default in the current version
      in: true,
    },
  });

  const doTheMath = (e) => {
    if (!formula) return false;
    let expr = formulaParser.parse(formula);
    let currentResult = expr.evaluate();
    setResult(currentResult);
    calculations.push({ formula, result: currentResult });
  };

  const handleKeyPadClick = (e) => {
    if (e.target.value === "=") return false;
    setFormula(formula + e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    doTheMath();
  };

  const handleFormulaInputChange = (e) => {
    setFormula(e.target.value);
  };

  const config = {
    operators: [
      { displayName: "Add", symbol: "+" },
      { displayName: "Subtract", symbol: "-" },
      { displayName: "Multiply", symbol: "*" },
      { displayName: "Divide", symbol: "/" },
    ],
  };

  return (
    <>
      <div className="calculator">
        <form
          name="calculatorForm"
          method="POST"
          action=""
          className="form form--calculator"
          onSubmit={(e) => handleSubmit(e)}
        >
          <legend className="sr-only">Calculator</legend>
          <Display
            handleFormulaInputChange={handleFormulaInputChange}
            formula={formula}
            setFormula={setFormula}
            result={result}
            setResult={setResult}
          />
          <Keypad operators={config.operators} onClick={handleKeyPadClick} />
        </form>
      </div>
      <History calculations={calculations} />
    </>
  );
};
