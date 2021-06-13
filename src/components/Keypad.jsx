import React from "react";
import { NumberKeys } from "./NumberKeys";
import { OperatorKeys } from "./OperatorKeys";
import { Button } from "./Button";

export const Keypad = (props) => {
  return (
    <div className="keypad">
      <NumberKeys {...props} />
      <div></div>
      <OperatorKeys {...props} />
      <Button
        displayName="Equals"
        buttonText="="
        onClick={props.onClick}
        type="submit"
      />
    </div>
  );
};
