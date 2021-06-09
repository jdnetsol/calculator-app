import React from "react";
import { Keypad } from "./Keypad";
import { Display } from "./Display";
import styled from "styled-components";
import { configure } from "@testing-library/dom";

export const Calculator = () => {
  const config = {
    // operators: ["+", "-", "*", "/"],
    operators: [
      { displayName: "Add", symbol: "+" },
      { displayName: "Subtract", symbol: "-" },
      { displayName: "Multiply", symbol: "*" },
      { displayName: "Divide", symbol: "/" },
    ],
  };

  return (
    <>
      <h2>Welcome to the calculator...</h2>
      <Display />
      <Keypad operators={config.operators} />
    </>
  );
};
