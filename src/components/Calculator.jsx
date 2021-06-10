import React from "react";
import { Keypad } from "./Keypad";
import { Display } from "./Display";
import styled from "styled-components";
import { configure } from "@testing-library/dom";
const Parser = require("expr-eval").Parser;

export const Calculator = () => {


var formulaParser = new Parser();


var formulaParser = new Parser({
    operators: {
      // These default to true, but are included to be explicit
      add: true,
      concatenate: true,
      conditional: true,
      divide: true,
      factorial: true,
      multiply: true,
      power: true,
      remainder: true,
      subtract: true,
  
      // Disable and, or, not, <, ==, !=, etc.
      logical: false,
      comparison: false,
  
      // The in operator is disabled by default in the current version
      'in': true
    }
  });

const handleKeyPadClick = (e) => {
    console.log("you clicked", e.target.value);

    var expr = formulaParser.parse('2*1+1');
    console.log(expr.evaluate()); // 7

    
}

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
      <Display />
      <Keypad operators={config.operators} onClick={handleKeyPadClick}/>
    </>
  );
};
