import React from "react";
import { NumberKeys } from "./NumberKeys";
import { OperatorKeys } from "./OperatorKeys";

export const Keypad = (props) => {
   
  return (
    <>This is the keypad
      <NumberKeys />
      <OperatorKeys {...props} />
    </>
  );
};
