import React from "react";
import { NumberKeys } from "./NumberKeys";
import { OperatorKeys } from "./OperatorKeys";

export const Keypad = (props) => {
   
  return (
    <>
      <NumberKeys {...props}/>
      <OperatorKeys {...props}/>
    </>
  );
};
