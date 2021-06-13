import React from "react";

export const History = (props) => {
  const { calculations } = props;
  return (
    <div className="container history">
      <h2>Previous calculations:</h2>
      {calculations && calculations.map((item, i) => (
        <li key={`${i}_historyitem`}> {item.formula} = {item.result}</li>
      ))}
    </div>
  );
};
