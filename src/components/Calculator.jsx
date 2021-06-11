import React, { useState } from "react";
import { Keypad } from "./Keypad";
import { Display } from "./Display";
import { Button } from "./Button";
import styled from "styled-components";
import { configure } from "@testing-library/dom";
const Parser = require("expr-eval").Parser;

export const Calculator = () => {
  const [formula, setFormula] = useState("");
  const [result, setResult] = useState();
  // const [history, setHistory] = useState({"id":0 "formula":0 "result":0})

  var formulaParser = new Parser();

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
    console.log("doing the maths...");
    if (!formula) return false;
    let expr = formulaParser.parse(formula);
    // console.log(expr.evaluate());
    setResult(expr.evaluate());
  };

  const handleKeyPadClick = (e) => {
    console.log("you clicked", e.target.value);
    if (e.target.value === "=") return false;
    setFormula(formula + e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted ");
    doTheMath();
  };

  const handleFormulaInputChange = (e) => {
    console.log("input changed ", e);
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
      <h2>Welcome to the Calculator...</h2>
      <p>
        Formula can be input using the "Enter Formula" field directly or via the
        on screen buttons.
      </p>
      <form
        name="calculatorForm"
        method="POST"
        action=""
        className="form form--calculator"
        onSubmit={(e) => handleSubmit(e)}
      >
        <legend>Calculator</legend>
        <Display
          handleFormulaInputChange={handleFormulaInputChange}
          formula={formula}
          setFormula={setFormula}
          result={result}
          setResult={setResult}
        />
        <Keypad operators={config.operators} onClick={handleKeyPadClick} />
        <Button
          displayName="Equals"
          buttonText="="
          onClick={handleKeyPadClick}
          type="submit"
        />
      </form>
    </>
  );
};
