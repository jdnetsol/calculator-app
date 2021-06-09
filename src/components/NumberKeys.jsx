import React from "react";
import { Button } from "./Button";

export const NumberKeys = () => {
  const keyNumbers = [...Array(10).keys()];

  return (
    <>
      {keyNumbers.map((item,i) => (
        <Button key={`${item}_keynumber`} buttonText={i} />
      ))}
    </>
  );
};
